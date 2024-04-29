# Wired SSO and Guest

## [Confluence](https://nile-global.atlassian.net/wiki/spaces/SO/pages/1859126094/Wired+SSO)

## What is Wired SSO?
By default all ports on a Nile switch are blocked. When a device connects to the wired port for the first time and is not capable of 802.1x, Nile looks up the MAB table to check if they are authorized by IT. If not, they will be put on an onboarding only segment. The device will be re-directed to the customer IDP portal for authentication (SSO). Once authenticated, the user will be moved to the employee segment (configured by the admin) and allowed access to the network. Nile will have the username and will track it as an employee device from a billing perspective

## Benifits of Wired SSO?
In legacy VLAN based architectures, every port needs to be configured with the appropriate VLAN. So for all ports on the desk the VLAN needs to be the employee VLAN. The big issue with this approach is if not port security is being used (which is usually the case), any device plugged in to this port can access the network. At Nile we do not do port level configs rather focus on device identity to onboard devices. This way no matter where the device goes, the security posture follows. Devices need to be approved to be on the right segments. This can be an operational issue for IT. We are thus introducing Wired SSO, wherein employees will first authenticate themselves using the customers IDP and then be granted access to the network. To summarize:
1. Elminate IT burden from onboarding employee wired devices 
2. Securly onboarding devices using SSO

## Wired SSO Details

### How can I configure Wired SSO?
We are introducting a new section under the Access Management Tab called Wired SSO where users can provide an onboarding segment and a post-athentication segment. Since this feature is tied to MAB, it can also be enabled when creating an ALL rule under Access Management --> Wired --> Add Device tab

### As an admin what do I need to do in order to make Wired SSO work?
As an admin you will have to do the following:
1. Setup your IDP for SAML authentication
2. Create a DHCP scope with a short lease time (5 mins). This is to ensure that devices release their IP and get a new one once segment is changed
3. Create an onboarding segment and map it to the DHCP scope defined in step 2
4. Identify an employee segment 
5. Enable Wired SSO by setting the onboarding segment and employee segment under Access Management --> Wired SSO

>[!NOTE]  
>When Wired SSO enable, the ALL rule is automatically enabled with a pre-auth (onboarding) and post-auth segment

