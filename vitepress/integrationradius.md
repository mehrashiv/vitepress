# RADIUS Integration

## Introduction

Nile can integrate with an external RADIUS server for:
1. 802.1x Authentication
2. MAC Authentication
3. Guest Access
4. UPSK Integration

### General Concepts
As seen in the screenshot the following parameters can be configured.
1. Name - Mandatory - A unique name for the RADIUS Server group
2. Port - Mandatory - Usually its 1812
3. Shared Secret - Mandatory - The same key needs to be configured on the RADIUS Server Side
4. Host 1 - Mandatory - The first RADIUS server in the list
5. Host 2 - Optional - The second RADIUS server in the list
6. Host 3 - Optional - The third RADIUS server in the list
7. Geoscope - Mandatory - Which sites this RADIUS server serves
8. Verify Hosts - Optional - MSCHAP-PEAPv2 username and password
9. Display NAS IP's - Nile's IP from where the request will originate. To set NAST IP in the RADIUS server
10. Guest Portal URLs - This is leveraged for Guest Access
11. Wired MAC Auth - Use this RADIUS Server for MAC authentication

#### Redundancy
If two or more hosts are configured, Nile will send the authentication request only to the first host. If Host 1 is down, Nile will send the authentication request to Host 2 else Host 3. If Host 1 comes online, Nile will move back to Host 1.

#### Proactive Monitoring
Nile will monitor all 3 servers every minute. We will report latency and up/down status for each RADIUS server. Nile can use accounting transactions to monitor or MSCHAPv2 username and password provided by the admin. Please note using PEAP will fill up the logs on the RADIUS server.

## 802.1x Authentication
Nile is a passthrough for all 802.1x transactions wired or wireless. The end user device and the RADIUS server exchange EAP messages to authenticate each other. So, any EAP method can be used as Nile is transparent

### Wireless 802.1x Authentication
In some use cases an SSID can be mapped to multiple segments. In such a scenario it is Mandatory for the RADIUS server to send back segment name which is an exact match to the Segment configured in Nile. This can be done either by using the Vendors Specific Attribute (Nile Dictionary file) or Standard RADIUS attribute of VLAN ID. Following is an example:
SSID Name - Denver Univ
Segments Mapped - Teacher, Student
Auth Type - 802.1x

The expectation is when a student connects to the SSID, they should be on the **Student** segment and when a Teacher connects to the SSID they should be on the **Teacher** segment. Since the Authentication is done by the RADIUS server it needs to send us the exact text **Student** or **Teacher**.

#### Vendor Specific Attribute (Nile Dictionary File)
The Nile dictionary file needs to be uploaded into the RADIUS server and the netseg attribute needs to be leverage e.g. netseg=Teacher or netseg=Student
The netseg value is case sensitive hence the case should match the segment configured in Nile Portal

If the netseg value is null or incorrect then the device will fail authentication with the appropriate message

```
VENDOR  Nile    58313

BEGIN-VENDOR    Nile

ATTRIBUTE       redirect-url    1       string
ATTRIBUTE       netseg          2       string
ATTRIBUTE       nile-avpair     3       string

END-VENDOR      Nile
```

>[!NOTE]  
>If the SSID is mapped to only one segment then the Nile dictionary file is not required or if used netseg can be set to null.

#### Standard RADIUS Attribute
Some RADIUS servers don’t support uploading a Dictionary file. Hence the segment name can be sent using the standard RADIUS attribute `TunnelPrivateGroupID_Lookup`

### Wired 802.1x
All ports on a Nile Switch are blocked by default. When a device plugs in to a Nile Switch it must be authorized by 802.1x or MAC Auth. If the device is configured for 802.1x, Nile is pass through just like it is for Wireless. 

There is no port level config on Nile Switches, hence when using wired 802.1x it is **required** that the RADIUS server send a segment back using the VSA or  `TunnelPrivateGroupID_Lookup` as described in the previous section. 

## MAC Authentication
Nile has built-in MAC authentication at no extra cost. As mentioned earlier, every device that plugs in to Nile must be authorized either by 802.1x or MAC Auth. The MAC auth can be either with Nile or an external RADIUS server. For authentications with an external RADIUS server, the **Wired MAC AUTH** checkbox needs to be checked when creating a RADIUS Server. Once this is enabled, Nile will authenticate all devices against a RADIUS server.

>[!NOTE]  
>RADIUS server groups can be mapped to single or multiple sites. If there are multiple RADIUS server groups for the same site, only one of them can be marked with **Wired MAC AUTH**. Also note a RADIUS server group can have up to 3 servers for redundancy.

## Guest Access
Nile offers 3 different solutions for Guest Access
1. Integration with External RADIUS server - Nile is passthrough
2. Nile Hosted Guest - No external service is required. Admins can create a guest portal using Nile settings but are responsible for isolating the guest traffic after it egresses from Nile
3. Secure Guest Service - Bare minimum settings required. Nile tunnels all traffic to a Nile PoP and manages DHCP as well.

In this section we will focus on Integration with an external RADIUS server
There are two methods of integration.
1. Server Initiated flow
2. Nile Initiated flow

### Server Initiated
In this mode, the admin will just configure the RADIUS server in Nile Portal as they do for 802.1x. No additional configuration is required. When a guest connects to a SSID that is mapped to the RADIUS server, following is the flow:
1. Guests will get an IP address (assuming, the user is connecting for the very first time)
2. In the background, Nile will do a MAC Auth with the external radius server
3. Since the RADIUS server is not aware of this MAC address (first time connection), it will send a MAC-Auth success with the Nile VSA **redirec-url**. Nile dictionaries import in the RADIUS server is required.
4. Nile will leverage the attribute to re-direct the guest user to the portal page. The device will authenticate with RADIUS server via the portal and Nile is transparent to it.
5. The RADIUS server will then notify Nile with a Success or Reject based on which the user will be allowed or denied access to the network

### Controller Initiated flow
In this mode, the admin will configure the RADIUS server in Nile portal but add a guest portal URL.  When a guest connects to a SSID that is mapped to the RADIUS server, following is the flow:
1. Guests will get an IP address (assuming, the user is connecting for the very first time)
2. Since Nile has the re-direct URL configured, we will direct the user to that URL. The device will authenticate with RADIUS server via the portal and Nile is transparent to it.
3. The RADIUS server will then notify Nile with a Success or Reject based on which the user will be allowed or denied access to the network **Need to figure out how this works**

## Unique Passphrase Key (UPSK)
Nile supports 2 methods of UPSK
1. Integration with an external RADIUS server
2. Nile Hosted UPSK

In this section we will cover integration with an external RADIUS server

### What is UPSK
UPSK is a feature where every user or device can have a unique key when connecting to the same SSID. Usually with PSK, every user shares the same key. If the key gets compromised, all users are impacted and must be configured with a new key. With UPSK, if a single users key is compromised only that users key must be changed as others have their unique keys. 

### How does Nile get UPSK from RADIUS?
Nile can integrate with an external RADIUS server to get a key of a user. The admin will configure the MAC address of the user with a unique key in the RADIUS server.
1. When a user connects to the Nile network, a MAC Auth request is sent to the RADIUS server
2. The RADIUS server will respond with a MAC Auth Accept and use a standard RADIUS attribute `Tunnel-Password` to send the key back
3. Nile will use this key to allow the user access to the network

