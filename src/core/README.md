# Core Folder

It should contain the code that is specific to your application and implements the **Cross-Cutting Concerns** of your applications — that is the “_plumbing, electricity, and heating_” of your house when comparing building an app to building a house if you will. Such code might for instance be:

* Custom error handlers,

* HTTP interceptors for auth/environment-specific headers,

* Singleton services.


![Cross-cutting concerns.](../assets/images/1_cia01-A62Njrs_jKAqUkeg.png)


### Wait… No Components in the Core Module?

Well, this is where the fuzziness of the whole decision process “ core or shared” kicks in. Yes, the _components are generally intended to be reused_ by their nature. _But — will they really be reused?_ That is the question you should consider. Things like navbars, footers, navbar/footer layouts, side menus, etc. probably won't be reused, yet all of these are Components.

Any code that will be application-specific, without intra-project dependencies, outside of feature module scope, even if it is a Component, should most likely end up in the `Core Folder`.
