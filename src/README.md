## Folder Structure

### Avoid too much nesting

There are many pain points associated with deep directory nesting in JavaScript projects. It becomes harder to write relative imports between them, or to update those imports when the files are moved. 

Unless you have a very compelling reason to use a deep folder structure, consider limiting yourself to a maximum of three or four nested folders within a single project. 

### Grouping by features or routes

A common way to structure projects is to locate CSS, JS, and tests together inside folders grouped by feature or route.

The definition of a “_feature_” is not universal, and it is up to you to choose the granularity. If you can’t come up with a list of top-level folders, you can ask the users of your product what major parts it consists of, and use their mental model as a blueprint.

In general, it is a good idea to keep files that often change together close to each other. This principle is called “colocation”.

### Core vs Shared

This separation is based on an [article](https://levelup.gitconnected.com/where-shall-i-put-that-core-vs-shared-module-in-angular-5fdad16fcecc) for Angular, but the points are valid for any framework. 

Detailed descriptions are defined in separate README files, both for [Core](./core/README.md) and [Shared](./shared/README.md), but the rule of thumb is:

* Is the code exclusive to my app (navbar, footer, etc.) and has no intra-project dependencies to other modules? → `core`

* Is it “plumbing code” (Singleton services, error handler, HTTP interceptor, etc.)? → `core`

* Is the code by its responsibilities intended to be reused across many places? → `shared`

* Do the rules clash for my case? → _discuss it with your teammates :)_
