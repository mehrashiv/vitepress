---
outline: deep
---
# [Deck](https://nileglobalinc-my.sharepoint.com/:p:/g/personal/shiv_nilesecure_com/ERbOh161JCpAk7qYWdW4ICgBPx0SP7tLujDBjboy-QChrw?e=jLHcpy)
# Nile Guest as a Service
**Introduction**

    Nile Guest Service is an optional part of Nile Access Service
(Network as a Service, NaaS). ** **

    Nile Guest Service enables our Nile Access Service  to provide
Internet access for many sets of visitors -- customers, partners, and
guests, with a diverse array of unknown devices -- while isolating them
from internal network resources. Nile Guest Service decreases the
possibility of a data breach and accelerates network troubleshooting.
 Nile Guest Service isolates visitor traffic from internal network
resources by automatically tunneling traffic between your site and a
local point of presence (PoP), from where it is forwarded directly to
the internet. 

    To summarize, the Nile Guest Service provides complete isolation of
the guest traffic from your existing network, thus securing your
corporate network, and also providing zero configuration and management
of the guest users.

**Assumptions**

    Customer has the Nile Access Service already. 

    This document assumes the reader has a working knowledge of
networking principles and network administration.


**How can Nile Guest Service benefit me?**

    "As an administrator, I want to ensure that all my guest traffic is
isolated from the corporate network."

    Creating a guest access solution involves many steps.  Buying and
upgrading hardware.  Buying and periodically renewing licenses.
 Orchestrating the setting up of each piece of equipment. Maintaining
the settings to handle changing conditions.  Each piece of equipment has
its own setup interface, and changes have to be coordinated among a
number of components. 

    Get any of this complex and disjointed setup wrong, and you risk an
expensive security breach.

    Nile Guest Service simplifies the creation and maintenance of a
secure corporate network. Administration is centralized and simplified.
 Additionally, Nile Guest Service isolates guest traffic from corporate
network traffic by tunneling the guest traffic to an Internet point of
presence outside of the corporate network.

   

**                                       Guest Traffic on Corporate
Network**

 Reducing complexity is important because, for security reasons, the
guest VLAN/Segment always needs to be isolated from the corporate
traffic, so that no guest can access your internal resources.  Nile
Guest Service will authenticate the guest users, as well as BYOD devices
of employees. 

**How do we know if the Nile Guest Service is up?**

    Nile Access Service will generate an alert in the Nile Portal, on
the Alert & Audit page, if the Nile PoP goes down.

**Nile PoP:**

    A PoP (Point of Presence) is a cloud-based server, provided by Nile,
that is the bridge between guest devices on your site and the Internet.

**Where is the PoP located?**

    The primary PoP will be the one closest to your branch location. 

**Given all traffic is tunneled to a PoP and then routed, what kind of
latency is expected?**

    Nile PoPs are located close to the customer locations, so the
latency is sufficiently small for doing any video calls, like Zoom^®^ or
teams meetings

**Is the tunneled traffic encrypted?**

    Not at this time.  We use a GENEVE tunnel (General Network
Encapsulation Tunnel ) from the Nile Service Block (NSB) Gateway on your
site(s) to the closest Nile PoP.

**What ports do I need to open on the firewall for the tunnel?**

    Open UDP port 6081 inbound and outbound on your firewalls. The
inbound pinhole is not required if your firewall software does
connection tracking of GENEVE connections.

**How do we configure the Nile PoP?**

    Once you sign up for the service, the Nile Portal is automatically
enabled for your tenant. The DHCP server, client subnets, segment, and
SSID are created by us for you. All you need to do is edit the SSID name
on the wireless page and save it. Once you save it, we will start
beaconing the SSID in your locations.

**Can a user open an unauthorized connection,  via the Nile Portal, into
the corporate network?**

    No.  Connections are initiated only by a properly authenticated
guest user. Data exchange over a guest connection is via the
above-mentioned tunnel, to the Nile PoP, to the service requested by the
guest user, and response comes back to the Nile PoP, then back through
the tunnel, and to the guest user.

    Attempts by any person in the public Internet to connect to the Nile
PoP will receive "Port Unavailable", or other Destination Unreachable
ICMP responses -- or the request packet will be completely ignored.

**Infrastructure:**

**How does DHCP work with Nile Guest Service?**

Nile Guest Service uses Nile DHCP service, which is already integrated.
Nile DHCP service automatically ensures zero IP address overlap.  This
eliminates the need to purchase and operate a separate DHCP service. 

**Today we have our own HTTPS proxy to block illicit URLs. Can we use
our proxy to block those illicit URLs?**

Depends on the service you use.  This needs to be discussed with your
Nile sales associate.

**Does Nile offer URL filtering?**

Not at this time.  We will be offering this facility in the future.

**Can I use my own DNS server(s)?**

Yes, you can specify one or two publicly accessible DNS server(s). The
DNS server(s) should each have a public IP address. You can change the
server(s) to be used when you click on the Guest SSID.

**Monitoring and authenticating guest users:**

**Do I have visibility into what guest users are connect to my
network?**

Yes, you can see the details about the guest device, on the client
details page on the Nile Portal. ** **

**Can Nile provide visibility to all guest traffic i.e. user flow
data?**

Yes, you can see that on Nile Portal, just like we show it for your
employee traffic flow. 

**Can I revoke an already connected Guest user?**

No.  This feature will be available in the future.

**Is it possible to view the guest user events within the Nile portal,
specifically to determine whether the user has accepted the terms and
conditions (TNC) and successfully obtained an IP address?**

Yes.

**Do we have control over how guest users can authenticate?  What will
be the guest experience be, when connecting to Nile Guest Service?**

Yes, you have control.  The experience depends on how the authentication
is set up for the guest SSID. When the user selects the Guest SSID on
his or her device, they will be shown a page from a captive portal,
where they will have the below experience depending upon the
authentication setup on the Nile Portal: **Click Through**, where the
user will be shown terms and conditions and connect to the SSID
directly; or* ***Sponsored Guest Login a.k.a. Email Approval** , where
the user will input their name and email address, and the name and email
address of the sponsor; the sponsor will then get an email requesting
approval; once the sponsor approves it, the user device will become
authenticated on the network. 

**Can we customize the guest portal with our own branding?**

Not yet.  That feature will be available in the future.

**Can we supply text of our terms and conditions?**

Yes, you can copy and paste your own terms and conditions. 

**Can Nile rate-limit guest traffic?**

The traffic rate is not rate limited. Instead, Guest Service applies
auto-QoS policy shaping on the Guest SSID.  That is, traffic for the
non-guest SSIDs are given higher preference, and traffic for the Guest
SSID is given lower preference. 