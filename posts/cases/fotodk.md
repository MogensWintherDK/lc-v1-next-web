---
title: Case | Foto.dk
description: Foto.dk online photoservice in Denmark
keywords: 
isPublished: true
thumb: /images/external/fotodk.png
image: /images/external/fotodk.png
external_link_href: https://www.foto.dk
external_link_text: Viste www.foto.dk
tags:
  - next
---

# Foto.dk
**An online photoservice in Denmark**

## _Introduction_
Together with Jesper Lillelund (as CEO), I (as CTO) founded Foto.dk A/S back in 2009, and we are still shareholders. Jesper came with the business, marketing, and photo background, and I had the required technical background and technical vision, a great combination to build up a business.

## _The platform_
I designed a very flexible and easily customizable platform based on a PHP backend, and a Single-Page JS frontend using server-side rendered component-level content. Based on the 2010 standard of websites, a fast and enjoyable solution for users. 

The solution was born directly into the cloud, developed and running on EC2 instances at AWS, and quickly evolving to use multiple other services as AWS made them available. AWS was relatively new at this time and not in the same league as today.

Finally multitenant was a core concept and we were running multiple sites on the same platform.

## _From market needs to a technical solution_
A large-scale market analysis gave the foundation for the vision and the strategy of how to get there was formed. I have never been afraid of thinking out of the box, and here it was truly required, as I designed e technical concept that was far beyond what the competitors could match. We made a highly technical solution personal for the customers.

## _Constantly evolving_
We went through a large number of iterations of designing, implementing, and evaluating. User feedback was continuously taken into account which helped the service to become better, while still staying true to our vision, our dot in the horizon.

## _A growing team_
The business was growing and so was our team. Two became five, with an additional developer, and two additional in sales support. Parallel development was speeding up the process, and sprints were introduced.

## _A bit more on the tech_
- **API first** - From the very beginning I designed the service to be API based.
    - The backend API rendered HTML content on a component level for the frontend, and the components were inflated into the template scheme in the front end, then initiated to activate interactive elements
    - All based on OOP PHP in, what became, a fully custom framework. There were not many good API frameworks to choose from in 2009.
    - API on both sites on the business, as order delivery to production partners, as well as status updates back from the production.
- **Integrations** - The platform had a Mediaclip product designer and a network of production partners.
    - On the front end a Mediaclip product designer was integrated, self-hosted at this time, and with a large level of custom plugins to the Mediaclip service for the integration to work smoothly.
    - A larger number of products from multiple suppliers was used, so a network of production partners was integrated. Orders were processed automatically, the best production combination was calculated by the algorithm, and the order pushed to production via API integration
- **Production protocol** - At the time there was no modern and flexible solution for how the orders were delivered to the production partners. Most had custom layouts for order files and requested all to be uploaded to an FTP server.
    - I defined the production protocol as a straightforward JSON/XML document, easy to parse, and provides links to the artwork files rather than large files.
    - Supporting multiple delivery forms was still required, so both API, SFTP, and FTP were supported
- **Order processing** - The processing of orders was a game-changing process
    - To deliver better quality metadata and artwork has always been my mantra, better quality going into the production gives better quality out.
    - Order processing on dedicated EC2 instances handled all the heavy lifting after the order had been placed. Making all order elements ready for production
    - Pushing orders to the productions in the configured format and communication method.
- **Communication and user experience** - Personal and customized was the keywords
    - Communication to the customers with order status as fast as we received it, something we are used to today, but back then it was not common for custom printed products.
    - Personalized offers and visualization of it on the website and in mail communication.
    - Basing the communication to the user based on their content and behavior on the site, like an advanced forgotten-basked concept.


## _Where is it now_
As both Jesper and I wanted to move on to other businesses, we migrated the service to the CeWe platform, where it is still operated.


## _The takeaway_
The years with Foto.dk extended my earlier experience in large-scale system design and implementation, systems with a lot of moving parts.

My leadership skills were growing, I learned to understand the personality profiles better and to work with them instead of against them.

And we proved that change can be made in an old industry. We challenged the way to communicate with print productions and saw our protocol be adopted further.

[Get in touch](/get-in-touch)