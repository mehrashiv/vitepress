# Wired SSO and Guest

## [Confluence](https://nile-global.atlassian.net/wiki/spaces/SO/pages/1859126094/Wired+SSO)

## What is Wired SSO?
By default all ports on a Nile switch are blocked. When a device connects to the wired port for the first time and is not capable of 802.1x, Nile looks up the MAB table to check if they are authorized by IT. If not, they will be put on an pre-auth only segment. The device will be re-directed to the customer IDP portal for authentication (SSO). Once authenticated, the user will be moved to the employee segment (configured by the admin) and allowed access to the network. Nile will have the username and will track it as an employee device from a billing perspective

## Benifits of Wired SSO?
In legacy VLAN based architectures, every port needs to be configured with the appropriate VLAN. So for all ports on the desk the VLAN needs to be the employee VLAN. The big issue with this approach is if not port security is being used (which is usually the case), any device plugged in to this port can access the network. At Nile we do not do port level configs rather focus on device identity to onboard devices. This way no matter where the device goes, the security posture follows. Devices need to be approved to be on the right segments. This can be an operational issue for IT. We are thus introducing Wired SSO, wherein employees will first authenticate themselves using the customers IDP and then be granted access to the network. To summarize:
1. Elminate IT burden from pre-auth employee wired devices 
2. Securly pre-auth devices using SSO

## Wired SSO Details

### Q. How can I configure Wired SSO?
We are introducting a new section under the Access Management Tab called Wired SSO where users can provide an pre-auth segment and a post-athentication segment. Since this feature is tied to MAB, it can also be enabled when creating an ALL rule under Access Management --> Wired --> Add Device tab

### Q. As an admin what do I need to do in order to make Wired SSO work?
As an admin you will have to do the following:
1. Setup your IDP for SAML authentication
2. Create a DHCP scope with a short lease time (5 mins). This is to ensure that devices release their IP and get a new one once segment is changed
3. Create an pre-auth segment and map it to the DHCP scope defined in step 2
4. Identify an employee segment 
5. Enable Wired SSO by setting the pre-auth segment and employee segment under Access Management --> Wired SSO

>[!NOTE]  
>When Wired SSO enable, the ALL rule is automatically enabled with a pre-auth (pre-auth) and post-auth segment

### Q. ALL rule is a catch-all so what happens to devices that are not browser based and do not match any MAC or OUI rule?
A. Such devices will land up in the pre-auth segment and will be displayed as Waiting for Approval. If the device does not authenticate. The device will have to be manually approved by the admin or if fingerprinted and there is a fingerprint rule, we should move it to the appropriate segment.  In some scenarios the device can be registered as a self register device from the self registration portal. So while it is in waiting for approval it can get authorized by the end user via the self registration portal.

### Q. Can Wired SSO be enabled at certain locations only?
A. Wired SSO cannot be enabled at certain locations only

### Q. How often does the device have to authenticate via SSO on wired?
A. The device has to only authenticate when:
1. If the device has not connected to the network (wireless or wired) for 30 consecutive days
2. Usually docking stations are static and don't move thus if the device is seen on a different port other than the one it was authenticated against, a SSO will be enforced
3. Site or location changes (#2 should automatically take care of this)
4. If the user changes the password in IDP (need to figure out how we get notified)
Once a device is authenticated it is added to the MAB table. Any consequent connections to a wired port will result in a successful MAC address match and SSO will not be required

### Q. What is an pre-auth segment?
A. pre-auth segment is a segment that only allows access to the IDP. This segment has to be created in the Nile Portal and mapped to a subnet that is restricted by the admin (at the upstream firewall or router) . All devices that are not capable of 802.1x or are not present in the MAB table will be mapped to this segment and will get an IP address from this segment. However the devices will not gain access to the network. They will be blocked and re-directed to the IDP page. Some restrictions on this segment:
1. This segment cannot be part of an OUI or Fingerprint Rule
2. If there is an exsiting device on this segment, it cannot be used as an pre-auth segment
3. Segment cannot be configured if it is part of any SSID configuration

>[!Nzote]
>Nile will automatically allow the IDP URLs on this segment and block everything else. If any other URL's need to be allowed, they can be added under Segments --> Segment Name --> Advance

### Q. If an IOT device is connected and is not in the MAB table, will it get an IP address?
A. Yes, the IOT device will get an IP address and if does not authenticate via SSO, it will show up as Waiting for approval in the Nile Portal.

### Q. Once the device succeeds SSO, what segment will it be on?
A. Once the device is authenticated, it will be moved from the pre-auth segment to the post-auth segment defined during Wired SSO setup

Q. What is the priority MAB rules?
A. When a device is plugged in to a wired port, it will be evaluated in the following rule priority:
1. Exact MAC address match
2. Fingerprint match (e.g. Polycom VVX 300)
3. OUI address match
4. ALL / Wired Guest / Wired SSO
>[!Note]
>ALL and pre-auth rules are mutually exclusive. Only one of them can be configured