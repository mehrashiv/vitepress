# Self Registration

## Introduction

Self registration is a feature where end users can create unique PSK for themselves and use those keys on multiple devices including headless devices. Users can also onboard wired devices using the self registration page

The key requirement is integration with an Identity provider like Okta, AzureAD, PingID, Auth0

## How does it work?
#### Step 1 - IDP Setup
Admin will login in to the Nile Portal and setup integration with their IDP.

#### Step 2 - SSID and Wired Setup
1. Wireelss - Admin will create a UPSK SSID and enable SSO.
2. Wired - Admin will choose the Self Register checkbox at a segment level

Also note if only #1 is setup, the self register portal will only give the option to create unique keys. If #2 is setup, only wired devices can be onboarded. 

#### Step 3 - Access Flow
When the aforementioned steps are performed, Nile autogenerates a self register URL. End users can navigate to the self registration page via my.nilesecure.com while connected to a Nile network. Once they get to the URL, they are first re-directed to the customers IDP for login. After successful login, they presented with the options defined in Step 2