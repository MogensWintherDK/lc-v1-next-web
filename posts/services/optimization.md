---
title: Optimization
description: Are you suffering from slow performance or high operational costs?
isPublished: true
publishedDate: 26/9-2023
thumb: /images/small/optimization.jpg
image: /images/large/optimization.jpg
tags:
  - System optimazation
  - Performance
  - Cost reduction
---
# System optimization

**A system optimization process covers a lot of different areas**
, and common for is that a deep understanding of the system and the setup around it is required. 

## _Performance_
As the business grows more users/orders/transactions are generating more traffic, and the service/processes/capabilities are getting extended over time, it is not uncommon to run into performance issues. 

Locating and solving issues ranges from simple updates of database queries, and the introduction of caching, down to more complex system design issues requiring code rewrites or structural changes.

**Common issues**
- **Slow response time** - The time the server uses to process the response. This covers all the issues the application or service can have internally.
- **Availability issues** - The cases where the request is not making it to the server. The cause here can be many, but a very common one is unhealthy instances behind the load balancer.
- **Network latency** - The time it takes for the request to get from the user to the server. The further the user is from the servers the more time it takes, and looking at the geo data of the users shows a lot.

**Common causes**
- **Code not optimized for performance** - The code can be written in ways where it works, but the mindset has not been on performance. It can be all from using large amounts of memory, ineffective algorithms, or deadlocks.
- **No scaling or too limited scaling**
- **Limited database optimization** - The queries to a database can vary dramatically in time depending on how they are designed, and missing indexes can slow the performance when full table scans are used.
- **Limited caching** - A lot of data can be cached and thereby remove load from primary services like web servers and database services. 
- **Data growth** - As a business expands and processes orders or other data, the amount of data will naturally grow. When there is no plan for monitoring and managing the data, it will just pile up and slow the general system as well as increase the cost.
- **Load spikes** - The natural spikes in users on a website or an API, or the additional load on a database during backup are all elements that give load spikes which can lead to poor user experience.
- **External services** - Almost all solutions today rely on external services. This is all from ad services, server-hosting, analytics, authentication, and more. Each of these services can be part of the reason, and evaluating if they are the right service or even a needed service is a great idea.
- **External code** - The available frameworks and libraries today are endless, but the quality of them varies a lot. Different versions of compilers and runtime environments can have a huge effect.
- **Default configuration** - When working on a new service it is common to keep a lot of configuration to the default values, and from a time-to-market perspective this can work, but when it comes to a high-performance application every parameter needs to be checked and adjusted. This is e.g. memory limitations, thread limitations, and much more.

## _Cost_
With most applications running in the cloud these days, the operational cost can grow dramatically if the wrong services, configurations, or providers are used. It is often very hard to predict, and it is an area where a monthly or automated KPI check of the operational cost against the general business performance is recommended.

**Include in your KPI**

An example of a KPI can be the operational cost per end-customer order. This provides simple figures that can be calculated into per-order revenue.

**Reduction in cost**

Reduction of the cost is tightly bound to the performance optimization process as well. When we remove 

**Cost reduction services**

Several services can keep track of your cloud service cost, and in some cases, this can be a good idea, as there is a lot of money to save by doing it right.

Companies like AWS can make a cost analysis report for you and come up with recommendations on cost reduction.

## _The goal_
A performance process can be never-ending if the goals are not clearly defined. In other words _"What the optimization should bring"_

## _The process_

The process is commonly like this
- Get a fast overview
- Define and agree on the goals with the stakeholders
- Take a deep dive
- Create and agree on the action plan stakeholders
- Execute the action plan with the team
- Evaluate with the stakeholders

[Get in touch](/get-in-touch)