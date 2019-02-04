---
title: It's 2019 and JAMStack Will Serve You Now
date: "2019-02-03T19:00:00Z"
---

I have been neglecting my blog for a while now and my hosting service was coming up for renewal. My blog website had been served by Wordpress as my content management system (CMS) on top of the legendary [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) stack. Wordpress is a fine CMS. A lot of people use Wordpress and other CMS applications like it everday and many will continue to use these applications for years to come. But as I considered my options now, I kept thinking about some of the issues I have been concerned about using this type of hosting service. Amoung them, my blog was slow when I visited it in my web browser and I worried about security issues relating specifically to PHP and Wordpress.

So I started to look around and I kept coming back to [static site generators (SSGs)](https://www.staticgen.com/) like [Hugo](https://gohugo.io), [Jekyll](https://jekyllrb.com) and [Gastby](https://www.gatsbyjs.org). Blogs are mostly static content and so they are a natural fit for static site genrators such as these.

I was aware of static site generators, but being a long time single page application developer using technologies like React and Node, I hadn't really seriously considered static site generators until only recently. But what I was now reading about how static site generators were being used with JavaScript, APIs and then combined with content delivery networks has really caught my attention and I quickly saw that JAMStack was something I had to try!

So I decided to try out something new and convert my blog from Wordpress and the older [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) stack to [Gastby](https://www.gatsbyjs.org), a static site generator (SSG) built on JavaScript using React, and the newer [JAMStack](https://jamstack.org). This means my blog will no longer be rendered server-side before being loaded in a web browser. Instead, my blog will be rendered client-side in the web browser after it is transmitted across the internet. But before I get too far into explaining the advantages of JAMStack, I better first explain what JAMStack is.

## What is JAMStack?

JAMStack is a term coined by the found of [Netlify](https://www.netlify.com), [Mathias Biilman](https://twitter.com/biilmann), to desribe a new architecture for delivering web applications and built using JavaScript, APIs and Markup. These three things together makeup the JAMStack. For my blog, the "JavaScript" part of the JAMStack will be React, but I could have used plain old JavaScript or another SPA framework/library like Vue or Angular. You can even use TypeScript as that just transpiles to JavaScript before deployment.

The "APIs" part of the JAMStack could be a collection of RESTful microservices hosted in the cloud or wherever or it could be something else, such as GraphQL. In fact, GraphQL has a lot of momentum heading into 2019 and is very popular in the JAMStack community, but that is another blog article for another day.

Lastly, the "Markup" component of the JAMStack is the simplest member to understand. It is literally the HTML tags for my website and you can use any number of popular static site generators (SSGs) to pre-render your content into Markup such as Jekyll, Hugo or [Gastby](https://www.gatsbyjs.org). I decided to use [Gastby](https://www.gatsbyjs.org) as it is a SSG built using React and I do love writing React applications!

To my mind, the very last and unofficial member of the JAMStack is the hosting and delivery of my JAMStack web application. Traditionally, web applications are hosted on the Internet on web servers. If you wanted to scale out to accomodate handeling more visitors to your web application, then you must either add more servers or at least give the web servers you have more computing resources to handle the increase in traffic requests to your content.

Not so with a web application built using the JAMStack!

Using JAMStack in 2019 means you will replace the web server with a content delivery network (CDN) since our web applicaiton is now just static content. This is huge! It means I can put my blog on the internet for less cost and it will render quicker than something else, like Wordpress, and it will be a lot less complicated to maintain. My new JAMStack web application will also be more secure for both myself as the developer and also for my website visitors. To understand why these claims are true, let me explain JAMStack's advantages.

## Client-Side vs Server-Side Rendering

Traditional web hosted applications like Wordpress, for example, are rendered by a web server before they are transmitted as a web page to a website vistor's web browser. This means your website visitor perceives a time delay when they go to your website because they must wait for the web server to serve and transmit the application content before they see it in their web browser. Modern single page applications (SPAs) can be more efficient at this than web server frameworks like PHP, JSP or ASP, but there is still a cost by the web server.

JAMStack applications by contrast are "rendered" by the static site generator either before being committed to their GIT repository or during the deployment process to your selected content delivery network (CDN) service provider. This means your website visitors will never wait for a JAMStack applicaiton to simply "render" the content they are asking for. In fact, there is so little server side work to be done for a JAMStack application, because of the differences in how content is rendered and also in how it is "distributed" across a network for service instead of "hosted" by fewer web servers, that your website visitor is simply going to wait only for how long it takes to transmit your content across the Internet as compressed static files.

In the end, website visitors can enjoy the same user experience using a JAMStack web application as a web application built by either more traditional ([LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) stack) or modern ([MEAN, MERN or MEVN stacks](<https://en.wikipedia.org/wiki/MEAN_(software_bundle)>)) architectures.

## JAMStack Is Simpler

One of the first rules of JAMStack is to put everything for your JAMStack website into a single GIT repository. Doesn't matter which GIT repository service you pick as long as you can deploy from it, but you must put everything for your website into it. Next, you deploy (upload) your website from the GIT repository to your selected CDN service provider. In my case, I use GitHub and I selected [Netlify](https://www.netlify.com) to distribute my blog across their CDN network. I could have also selected Bitbucket or GitLab and another CDN provider like [AWS S3](https://aws.amazon.com/s3/) and [CloudFront](https://aws.amazon.com/cloudfront/) or [Spaces](https://www.digitalocean.com/products/spaces) by [DigitalOcean](https://www.digitalocean.com). Thee are many more service providers out there, so look around for yourself.

But thats it! Just build your web application using your static site generator (SSG), commit it all to your GIT repository that also includes your images and other content and then upload for distribution to your favorite CDN service provider and you are done!

## JAMStack Is More Reliable And Scales Better

JAMStack web application are more reliable because they are a simpler system and also because of how they are deployed, using a content delivery system network. This means you website will be distributed very widely and will be cached and available to be immediately transmitted as compressed static files to any web browsers asking to view it.

My blog, for example was running on a small virtual machine hosted on the internet. If this one virtual machine had problems, my website would simply be unavailable to everyone. If my blog had a large increase in readers, I would have to call up my hosting service and negotiate for more server resources. Even if I was hosting my blog from a Docker container running inside a Kubernetes cluster hosted by a cloud provider, I would still have to increase resources everytime my website traffic consumption outgrew my anticipated server resources.

CDN service provider's resources aren't infinite either. Some CDN service providers have larger networks than others, but there is an obvious difference in how fast my blog will be delivered from a network spread across the world than from a single web server or from purchased cloud services. In the end, I would rather increase my capacity by switching to a larger CDN service provider than adding more servers or adding more resources to the servers I have. This is why a JAMStack web application will scale better.

## JAMStack Is More Secure

JAMStack has a lot going for it, including the fact it a simpler system with fewer parts. And that fact also means it has less "attack surface" to security vulnerabilities. A JAMStack web application does not talk directly to a database, which means there is not a SQL injection attack for you to worry about. Thats a problem for any APIs out there, not for a JAMStack web application, strictly speaking. A JAMStack application is a smaller and less complicated system, which means the JAMStack web application developer can more easily secure what is there. For example, if your JAMStack web application requires user login, then you do need to implement user authentication and authorization; you still must do that correctly, of course.

## JAMStack Costs Less Than Traditional Web Hosting

For my modest sized, personal blog website, the cost to host my blog on the internet was the cost of renewing my internet domain and paying for web server hosting. I still need to pay for my internet domain, but instead of paying about \$50 per year for web server hosting, I am now using [Netlify](https://www.netlify.com) to distribute my blog for free thanks to their free service plan that my hosting requirements allow my blog website to benefit from.

Even if my hosting requirements weren't so modest, shop around and check out the prices for hosting on any CDN provider verses website hosting and you will notice that, in general, CDN service provider prices always cost alot less for the equivilant amount of web server hosting on the internet or in the cloud.

Distributing my JAMStack application from my GitHub repository to CDN service provider also means I do not have a web server to maintain. This saves me more time and more money because I have more time to focus on adding content to my website for my website visitors instead of spending time upgrading web server software.

## It is 2019 And JAMStack Is Ready

JAMStack has been around as an idea since 2015, but it has been maturing between then and now as an idea, as a technoligical architecture and as a production ready solution. As I was learning more about JAMStack, I quickly came across a [fantastic article](https://medium.com/memory-leak/the-jamstack-its-pretty-sweet-e0834e4e6bb7) published on [Medium](https://www.medium.com) by an insightful author, [Astasia Myers](https://twitter.com/AstasiaMyers). Astasia not only explained JAMStack to me, but she also shared an understanding of the JAMStack ecosystem as it exists today. She included in her article this graphical layout of it.

![A graphic of the JAMStack ecosystem, published by Redpoint and Astasia Myers](https://cdn-images-1.medium.com/max/800/1*TdRFV0LAG7TG3US2YJMALA.jpeg)

## Thank You Netlify For Distributing My Blog Website!

Lastly, I have to take this opportunity to publicly thank [Netlify](https://www.netlify.com) for making a great basic service tier available at no cost. Since I began using their service, less than a week ago, I have gone from hosting my blog on a single web server to having it distributed over a large network of servers located across the world. I am continuously amazed at how quickly my blog readers can interact with my content because of their excellent service. I encourage everyone to shop around and choose what will work best, but I also recommend taking a look at what [Netlify](https://www.netlify.com) offers.
