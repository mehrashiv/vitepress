# MAB
## What is Zero Trust mean 

## Under ZTP add what is Zero trust isolation
![MAB](/mabladder.png)

![segmentsMaB](/segmentsMAB.png)

### Why do we need MAB ?
Nile required all wired access to be authenticated before accessing the network, Nile
supports three different Wired authentication methods:
1- Wired 8021x authentication (required RADIUS)
2- Wired RADIUS MAB authentication (required RADIUS)
3- Nile Portal Wired MAB authentication

### Can I upload a list of MAC addresses for Wired MAB authentication?

Yes, You can upload a list of MAB Mac addresses by uploading CSV file via Nile
Portal (Settings -&gt; Access management-&gt; Wired)
“MAC address” devices MAC address, this field is mandatory.
&quot;Segment&quot; will be the segment name you assign the Wired device to, the
segment must match an existing segment, this field required only for “Allow”
status and optional for “Deny”
“Lock to Port” lock the device to a specific switch/port when it first connects to
Nile Network, this field is optional
&quot;Site&quot; allows the device to authenticate/connect in a specific site only this field is
optional.
&quot;Building&quot; allows the device to authenticate/connect in a specific site/building
only this field is optional.
&quot;Floor&quot; allows the device to authenticate/connect in a specific site/building/floor
only this field is optional.
“Allow or Deny” to allow or deny specific devices based on MAC address, this
field is mandatory.

## Can I Disable Nile Wired Authentication?

Nile network is designed with security best practices, you can not disable
MAB authentication, but you can add a catch-all auto policy (not
recommended) to allow all devices and assign them to a specific segment.
You can enable the allow-all policy via Nile portal from (Settings -&gt; Access
management-&gt; Wired -&gt; ADD DEVICE -&gt; Allow all MACs, and select the
default segment for all new devices)
Allow all MACs policy will automatically create a unique MAC-allowed
entry for each device when the device connects to the Nile switch for the
first, deleting the “Allow all MACs” policy will not impact connected devices
or delete a specific policy that is auto-created by all policy.
## Can I Enable Nile Auto Wired Authentication for specific device types?
You can auto MAB authentication for specific device manufacture or type
using OUI, OUI is the first 24 bits of a MAC that used as a globally unique
identifier assigned by the Institute of Electrical and Electronics Engineers
(IEEE) to identify network devices.
You can enable the OUI via Nile portal from (Settings -&gt; Access
management-&gt; Wired -&gt; ADD DEVICE -&gt; OUI/MAC , select a segment for
the new devices, status (Approved/Denied), and Geo Scope )
OUI MACs policy will automatically create a unique MAC-allowed entry for
each device when the device connects to the Nile switch for the first time,
deleting the “OUI MACs” policy will not impact connected devices or delete
a specific policy that is auto-created by OUI policy.

## What is Nile MAB Lock to port?
Port Lock will lock device approval to a specific Nile switch/port when the
device connects for the first time, moving the wired device to a different
port or different switch, MAB policy will be changed from allow to deny ,
Nile portal admin will need to allow the device again.
To enable Port lock for specific device or devices, you can enable it via
Nile portal (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt;
enable Lock to port, enter OUI (for multi devices) or MAC (for single
device), select a specific segment, optional you can select Geo scope to
allow the device to be connected in a specific location)
## What is MAB Geo scope?
MAB Geo scope is to limit wired device authentication pre-approval to a
specific location (specific site or building or floor), moving the wired device

to a different location, MAB policy will be changed from allow to deny, Nile
portal admin will need ti allowed the device again
To enable Geo Scope for a specific device or devices, you can enable it via
Nile portal (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt;,
enter OUI (for multi devices) or MAC (for a single device), select a specific
segment, select Geo scope (Site or Building or Floor, or multi-location) to
pre-approved the device to be connected on a specific location