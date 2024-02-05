# Intro
[Main Deck](https://nileglobalinc-my.sharepoint.com/:p:/g/personal/shiv_nilesecure_com/EetxX1hpDzRHhRIFga8_XJMB4hAH4uuh7UPcWKRXikGpZA?e=NfqIbY) - Slide 7-9

### Service Tenets
### Operation driven design (How SO's define features)
### Shift Left
### AI Networking
### Key outcomes needed for NaaS

![Sensors](/sensors.png)

![Host Seg](/hostseg.png)

![Shared Responsibility](/sharedresp.png)

## Overview
Nile delivers network-as-a-service that includes wireless and wired access. Our goal is to eliminate complexity and provide a simple, scalable, and secure network that doesn’t need configuration (by humans). We want to ensure the service is always-on. To achieve this we have taken an outside-in approach using physical and virtual sensors that are deployed across the Nile network (including AP’s and switches). We call this the "outside-in approach" because of its simplicity and the ability to easily verify the Nile sensor data. These sensors monitor the Nile network itself, as well as the DHCP, RADIUS, Internet, DNS, and applications, to identify any issues that can cause end-to-end service interruption. The Nile network is guaranteed to be always-on and backed financially if SLAs are not met. 

Following are the SLAs Nile commits to:
Availability:The goal of this SLA is to ensure Nile is available for end users/devices. Our WiFi sensors probe the NSB every minute to ensure it is available. If the probes fail, Nile is in violation for that minute.
Coverage:The goal of this SLA is to confirm every sensor reports a five bars (-67dbm signal or better), every minute. If a single sensor does not receive this signal level, Nile is in violation for that minute.
Capacity: The goal of this SLA is to verify that the committed number of Nile APs are functioning across a floor. If the committed number is not met, Nile is in violation for that minute. 

Nile commits to SLAs per building, monthly . The SLA is calculated as a percentage of the time Nile meets the SLA threshold. Nile calculates all of the violation minutes reported by all sensors in a building to measure the percentage of time that Nile meets SLA commitments. Unique to the industry, if we fall short on our commitment we provide  financial credits back to you.

Our wall pluggable, WiFi physical sensors, and each AP’s 3rd radio sensor are monitoring the Nile service every minute to measure availability, coverage, and capacity of the network. If an issue with Nile disrupts service, this will be reflected in the Nile tile,directly affecting our committed SLA. We  built redundancy into every aspect of the Nile Service Block (APs and switches), therefore as an admin, you don't have to worry if an AP or a link is down, but rather if service is impacted. Service availability is truly reflected by these metrics that are continuously running.

Core: 
	Core is basically what Nile offers, Secure Wireless and Wired connectivity as a service.
Context:
	Context is the infrastructure that supports the Nile Service, these include the Internet, DHCP, DNS , Radius, device and applications
