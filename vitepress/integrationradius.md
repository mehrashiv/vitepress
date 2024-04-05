# RADIUS Integration

## Introduction

Nile can integrate with an external RADIUS server for:
1. 802.1x Authentication
2. MAC Authentication
3. Guest Access
4. UPSK Integration

### General Concepts
As seen in the screenshot the following parameters can be configured
1. Name - Manadatory - A unique name for the RADIUS Server group
2. Port - Mandatory - Usually its 1812
3. Shared Secret - Mandatory - The same key needs to be configured on the RADIUS Server Side
4. Host 1 - Mandatory - The first RADIUS server in the list
5. Host 2 - Optional - The second RADIUS server in the list
6. Host 3 - Optional - The third RADIUS server in the list
7. Geoscope - Mandatory - Which sites this RADIUS server serves
8. Verify Hosts - Optional - MSCHAP-PEAPv2 username and passoword
9. Display NAS IP's - Nile's IP from where the request will originate. To set NAST IP in the RADIUS server
10. Guest Portal URLs - This is leveraged for Guest Access
11. Wired MAC Auth - Use this RADIUS Server for MAC authentication

#### Redundancy
If two or more hosts are configured, Nile will send the authentication request only to the first host. If Host 1 is down, Nile will send the authentication request to Host 2 else Host 3. If Host 1 comes online, Nile will move back to Host 1.

#### Proactive Monitoring
Nile will monitor all 3 servers every minute. We will report latency and up/down status for each RADIUS server. Nile can use Accounting transactions to monitor or MSCHAPv2 username and password provided by the admin. Please note using PEAP will fill up the logs on the RADIUS server.

## Wireless 802.1x Authentication
Nile is passthrough for all 802.1x transactions. The end user device and the RADIUS server exchange EAP messages to authenticate each other. So any EAP method can be used as Nile is transparent

In some use cases an SSID can be mapped to multiple segments. In such a scenario it is Mandatory for the RADIUS server to send back segment name which is an exact match to the Segment configured in Nile. This can be done either by using the Nile Dictionary file or Standard RADIUS attribute of VLAN ID. Following is an example:
SSID Name - Denver Unniv
Segments Mapped - Teacher, Student
Auth Type - 802.1x

The expectation is when a Student connects to the SSID, they should be on the **Student** segment and when a Teacher connects to the SSID they should be on the **Teacher** segment. Since the Authentication is done by the RADIUS server it needs to send us the exact text **Student** or **Teacher**.

```
VENDOR  Nile    58313

BEGIN-VENDOR    Nile

ATTRIBUTE       redirect-url    1       string
ATTRIBUTE       netseg          2       string
ATTRIBUTE       nile-avpair     3       string

END-VENDOR      Nile
```

### Nile Dictionary File
The Nile dictionary file needs to be uploaded in to the RADIUS server and the netseg attriute needs to be leverage e.g. netseg=Teacher or netseg=Student
The netseg value is case sensitive hence the case should matach the segment configured in Nile Portal

If the netseg value is null 


