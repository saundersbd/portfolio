---
title: CampUSA App
date: 2015-01-02
---

# CampUSA App

|               |                                                                      |
| ------------- | -------------------------------------------------------------------- |
| Team Members: | Erin Mays, Maria Surawska, Carl Hill-Popper, David Ryan, Alex Nimmer |
| Platforms:    | iOS, Android                                                         |

CampUSA is a native app for iOS and Android that lets people book reservations at Thousand Trails campgrounds. When we started working on the project, the majority of campground bookings were handled over the phone. The Thousand Trails company wanted to create a native app experience that would allow people to explore and book campsites while they’re away from the computer.

<Image 
    alt="Alt Text"
    src="/images/campusa/campusa-main-image.png"
    caption="This is a caption"
/>

## The Biggest Challenges

### Integrating with an existing back-end system

Thousand Trails had their own internal team maintaining a back-end and supplying endpoints for their website. We had to figure out which endpoints existed, and which ones would need to be created. Then we had to figure out how to work with the client team to build what we needed.

### Lack of funding for user testing

We had very little room in the budget for user testing. Without being able to extensively test the product with real users, how would we measure our success? We needed to find creative ways to test our ideas throughout the process, and also put our faith in existing knowledge and research.

## Designing the Navigation

If you’re going to build a product that lets people book campsites, it of course needs to be easy to find the campsites. We decided to optimize for two user mindsets: those who already knew which campground they’d like to stay at, and those who wanted to do a little exploration before making their decision.

The first thing I did was get a handle on the data set. I wanted to figure out what we had to work with. Knowing the names of things and how customers think about them is crucial to my design process, because I’m trying to build off of things that they understand.

### I worked with the Thousand Trails back-end team to discover these key facts:

- There aren’t many Thousand Trails campgrounds (less than 300)
- The campgrounds are organized by state and region, but states like Florida and California have a lot more than Indiana or Illinois
- The API was not set up to allow us to filter campgrounds by amenity. It would be hard to just look for places that have pools, for example.

### First Solution

The first thing we tried was implementing a text search feature that could handle every single route that a user wanted to take. If they know exactly which campground they wanted to see, they could enter the name of it and the app would suggest options. If they wanted to search for campgrounds in a state, they could type the state. The hope was that one feature could quickly get a user in any situation wherever they need to go. We took this first search iteration into user testing

With limited budget for user testing, we found an affordable compromise in usertesting.com. The service allows you to get 15-minute screencasts of people using your app.

I wrote the initial version of the user testing script, gathered input from the project team, and ran the tests. Here are some of the things we learned:

#### Search wasn’t smart enough

If somebody misspelled their entry the search would yield no results. The search couldn’t take a ZIP code. Even though we described that in the placeholder text, people still tried to use them. In hindsight, why wouldn’t they?

#### Users had the wrong mental model of the data set

They didn’t realize that the app was only indexing a small amount of campgrounds. If a person entered a state that had no campgrounds in it, the search would yield no results. They were confused when they entered a state like Indiana, which they knew had campgrounds in it. The problem was that it didn’t have Thousand Trails campgrounds in it, and we didn’t successfully communicate that.

In practice, this ended up being a big enough problem that we had to move in a different direction with the navigation of the app

To be honest, I think I tried to outsmart myself. In a perfect world that smart search might have been a good idea, but sometimes a less magical solution is much easier to use.

### Second Solution

Ultimately we decided that we were giving users too much freedom with the open-ended text search. In theory, the search bar would give someone immediate access to anything they wanted to see. I practice, we found out that they didn’t actually know what they wanted to see. And if users knew what they wanted, they still needed to enter the exact term to find it.

Another problem that we didn’t anticipate is that our original search design was bad at showing users what wasn’t there. For example, they would enter the name of a state that they knew had many campgrounds, but they didn’t understand that no results were returned because they were only searching amongst Thousand Trails campgrounds.

Since we had only a small quantity of campgrounds and user pathways, the next thing I suggested was switching to a hub-style navigation structure. Hubs don’t always seem elegant, but they are valuable when people tend to operate in one branch of the navigation structure or do the same task over and over.

The new home screen has two buttons that lets users see a list of campgrounds based on the state or region they select. The third option activates the original search functionality.

### Results

We did another round of user testing and found that the simplified navigation structure eliminated most of the difficulties that we discovered initially. All twelve of the participants got to the campgrounds identified in our test tasks.

## Summary

I'm proud of the work we did on this project. In the year and three months that I was on the team we took it from a concept to a multi-platform product that is generating revenue for our client.

I got a chance to show every skill in my toolkit, including writing, prototyping, animation, user testing and interaction design. I am grateful to have worked with developers who are smart and fast, and able to prototype a lot of my ideas in native code.

Thousand Trails is well-positioned to expand their brand and mobile platform in the future. Now they have one of the most beautiful apps in the campground space.

---

_If you want to hear about more problems our team solved on this project, send me a message at [saundersbd@gmail.com](mailto:saundersbd@gmail.com)_.
