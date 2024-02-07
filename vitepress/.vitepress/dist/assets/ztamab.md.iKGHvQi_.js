import{_ as e,c as t,o as i,V as a,a8 as o,a9 as n}from"./chunks/framework.htLevCiS.js";const g=JSON.parse('{"title":"MAB","description":"","frontmatter":{},"headers":[],"relativePath":"ztamab.md","filePath":"ztamab.md"}'),c={name:"ztamab.md"},l=a('<h1 id="mab" tabindex="-1">MAB <a class="header-anchor" href="#mab" aria-label="Permalink to &quot;MAB&quot;">​</a></h1><h2 id="what-is-zero-trust-mean" tabindex="-1">What is Zero Trust mean <a class="header-anchor" href="#what-is-zero-trust-mean" aria-label="Permalink to &quot;What is Zero Trust mean&quot;">​</a></h2><h2 id="under-ztp-add-what-is-zero-trust-isolation" tabindex="-1">Under ZTP add what is Zero trust isolation <a class="header-anchor" href="#under-ztp-add-what-is-zero-trust-isolation" aria-label="Permalink to &quot;Under ZTP add what is Zero trust isolation&quot;">​</a></h2><p><img src="'+o+'" alt="MAB"></p><p><img src="'+n+'" alt="segmentsMaB"></p><h3 id="why-do-we-need-mab" tabindex="-1">Why do we need MAB ? <a class="header-anchor" href="#why-do-we-need-mab" aria-label="Permalink to &quot;Why do we need MAB ?&quot;">​</a></h3><p>Nile required all wired access to be authenticated before accessing the network, Nile supports three different Wired authentication methods: 1- Wired 8021x authentication (required RADIUS) 2- Wired RADIUS MAB authentication (required RADIUS) 3- Nile Portal Wired MAB authentication</p><h3 id="can-i-upload-a-list-of-mac-addresses-for-wired-mab-authentication" tabindex="-1">Can I upload a list of MAC addresses for Wired MAB authentication? <a class="header-anchor" href="#can-i-upload-a-list-of-mac-addresses-for-wired-mab-authentication" aria-label="Permalink to &quot;Can I upload a list of MAC addresses for Wired MAB authentication?&quot;">​</a></h3><p>Yes, You can upload a list of MAB Mac addresses by uploading CSV file via Nile Portal (Settings -&gt; Access management-&gt; Wired) “MAC address” devices MAC address, this field is mandatory. &quot;Segment&quot; will be the segment name you assign the Wired device to, the segment must match an existing segment, this field required only for “Allow” status and optional for “Deny” “Lock to Port” lock the device to a specific switch/port when it first connects to Nile Network, this field is optional &quot;Site&quot; allows the device to authenticate/connect in a specific site only this field is optional. &quot;Building&quot; allows the device to authenticate/connect in a specific site/building only this field is optional. &quot;Floor&quot; allows the device to authenticate/connect in a specific site/building/floor only this field is optional. “Allow or Deny” to allow or deny specific devices based on MAC address, this field is mandatory.</p><h2 id="can-i-disable-nile-wired-authentication" tabindex="-1">Can I Disable Nile Wired Authentication? <a class="header-anchor" href="#can-i-disable-nile-wired-authentication" aria-label="Permalink to &quot;Can I Disable Nile Wired Authentication?&quot;">​</a></h2><p>Nile network is designed with security best practices, you can not disable MAB authentication, but you can add a catch-all auto policy (not recommended) to allow all devices and assign them to a specific segment. You can enable the allow-all policy via Nile portal from (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt; Allow all MACs, and select the default segment for all new devices) Allow all MACs policy will automatically create a unique MAC-allowed entry for each device when the device connects to the Nile switch for the first, deleting the “Allow all MACs” policy will not impact connected devices or delete a specific policy that is auto-created by all policy.</p><h2 id="can-i-enable-nile-auto-wired-authentication-for-specific-device-types" tabindex="-1">Can I Enable Nile Auto Wired Authentication for specific device types? <a class="header-anchor" href="#can-i-enable-nile-auto-wired-authentication-for-specific-device-types" aria-label="Permalink to &quot;Can I Enable Nile Auto Wired Authentication for specific device types?&quot;">​</a></h2><p>You can auto MAB authentication for specific device manufacture or type using OUI, OUI is the first 24 bits of a MAC that used as a globally unique identifier assigned by the Institute of Electrical and Electronics Engineers (IEEE) to identify network devices. You can enable the OUI via Nile portal from (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt; OUI/MAC , select a segment for the new devices, status (Approved/Denied), and Geo Scope ) OUI MACs policy will automatically create a unique MAC-allowed entry for each device when the device connects to the Nile switch for the first time, deleting the “OUI MACs” policy will not impact connected devices or delete a specific policy that is auto-created by OUI policy.</p><h2 id="what-is-nile-mab-lock-to-port" tabindex="-1">What is Nile MAB Lock to port? <a class="header-anchor" href="#what-is-nile-mab-lock-to-port" aria-label="Permalink to &quot;What is Nile MAB Lock to port?&quot;">​</a></h2><p>Port Lock will lock device approval to a specific Nile switch/port when the device connects for the first time, moving the wired device to a different port or different switch, MAB policy will be changed from allow to deny , Nile portal admin will need to allow the device again. To enable Port lock for specific device or devices, you can enable it via Nile portal (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt; enable Lock to port, enter OUI (for multi devices) or MAC (for single device), select a specific segment, optional you can select Geo scope to allow the device to be connected in a specific location)</p><h2 id="what-is-mab-geo-scope" tabindex="-1">What is MAB Geo scope? <a class="header-anchor" href="#what-is-mab-geo-scope" aria-label="Permalink to &quot;What is MAB Geo scope?&quot;">​</a></h2><p>MAB Geo scope is to limit wired device authentication pre-approval to a specific location (specific site or building or floor), moving the wired device</p><p>to a different location, MAB policy will be changed from allow to deny, Nile portal admin will need ti allowed the device again To enable Geo Scope for a specific device or devices, you can enable it via Nile portal (Settings -&gt; Access management-&gt; Wired -&gt; ADD DEVICE -&gt;, enter OUI (for multi devices) or MAC (for a single device), select a specific segment, select Geo scope (Site or Building or Floor, or multi-location) to pre-approved the device to be connected on a specific location</p>',18),s=[l];function r(d,h,p,u,f,m){return i(),t("div",null,s)}const b=e(c,[["render",r]]);export{g as __pageData,b as default};
