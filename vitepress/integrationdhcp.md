# DHCP Integration

## Introduction

NIle has two options for DHCP
1. Nile Hosted DHCP Service
2. Integration with Customers DHCP server (Windows, Infoblox etc.)

Nile DHCP service will be covered in a separate section

In general customers are use to a integrated DHCP server inside of a firewall like Palo Alto or Fortigate. In such deployments the DHCP server works in L2 mode, meaning the server is listening on all VLANs the customer has configired. The firewall is connected to the wireless controller or AP or switch with a trunk port. So all DHCP broadcast packets make it to the firewall. Depending on which VLAN the packet is received the Fortigate or Palo Alto will respond with reply from that VLAN's subnet

This is not how it works with Nile. Nile is a L3 architecuture so we dont send any of the broadcast packets to the upstream router or firewall. We are a ip helper that sends a L3 DHCP packet to the DHCP server. The packet is orginated from subnet that device should belong to. The source IP address is the default gateway of the client and it is Nile. So if there are 3 user subnets, Nile will be the default gateway for all three subnets and will have a IP on all three subnets. So for example the subnets are 192.168.1.0/24, 192.168.2.0/24 and 192.168.3.0/24, then the customer can choose the default gateway to be 192.168.1.1, 192.168.2.1 and 192.168.3.1. These will be become Nile's IP addresses. 

When a user connects to a SSID, we check which subnet it belongs to and when a DHCP broadcast packet is sent we originate the ip-helper from that IP.

Since the DHCP server sits outside of the NSB, this traffic has to be routed via the router or firewall to the DHCP server. The most common issue we see is, customers forget to create firewall rules to allow UDP 67, 68 originating from 192.168.1.1, 192.168.2.1 and 192.168.3.1 in this case. They have to allow every user subnet to exchange DHCP packets via the DHCP server

## Deep Dive 

Lets look how this is configured
![DHCP Settings](/dhcpnp.png)
In Nile Portal the customer has to add details of their DHCP server. As see in the screenshot, they have to do the following:
1. Name - Required - Can be anything but has to be unique across the tenant
2. Host 1 - The first DHCP server in the list
3. Host 2 - Optional - The second DHCP server in the list
4. Host 3 - Optional - The third DHCP server in the list
5. Geoscope - Required - Which sites this DHCP server serves
6. Subnet - Define all subnets and their respective default gateways that this sever is configured for

### DHCP Redundancy
If the customer configured Host 1, Host 2 and Host 3, then Nile will send the request to all three servers. Whichever server responds first, that IP will be used. if the other two respond, we will ignore them. So redundancy needs to be configured between the servers

#### Option 1 - VIP
Customers can configure two or more DHCP servers with a VIP. In that case they only need to configure Host 1 with the VIP and not configure Host 2 and Host 3

#### Option 2 - Multiple server with loadbalancing
Customers can configure all 3 hosts but the servers are clustered together so even thoug all 3 will receive the DHCP request only one will respond with an offer

In short customer needs to configure redundancy on the DHCP server side

### Nile as default gateway
Taking the previous example, the customer will come to the Nile portal and add the following under the subnet section as see in the screenshot


