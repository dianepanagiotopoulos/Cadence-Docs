(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{460:function(e,t,a){"use strict";a.r(t);var s=a(8),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-maintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-maintenance"}},[e._v("#")]),e._v(" Cluster Maintenance")]),e._v(" "),a("p",[e._v("This includes how to use and maintain a Cadence cluster for both clients and server clusters.")]),e._v(" "),a("h2",{attrs:{id:"client-worker-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-worker-overview"}},[e._v("#")]),e._v(" Client worker overview")]),e._v(" "),a("p",[e._v("Java and Go clients should have almost the same guidance for setup, except that the Java client has a few more configurations about threading. That’s because Java language doesn’t have native support for lightweight threading like Golang goroutines.")]),e._v(" "),a("h2",{attrs:{id:"scalable-tasklist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scalable-tasklist"}},[e._v("#")]),e._v(" Scalable tasklist")]),e._v(" "),a("p",[e._v("By default a tasklist is not scalable enough to support hundreds of tasks per second. That’s mainly because each tasklist is assigned to a Matching service node, and dispatching tasks in a tasklist is in sequence.")]),e._v(" "),a("p",[e._v("In the past, Cadence recommended using multiple tasklists to start workflow/activity. You need to make a list of tasklists and randomly pick one when starting workflows. And then when starting workers, let them listen to all the tasklists.")]),e._v(" "),a("p",[e._v("Nowadays, Cadence has a feature called “Scalable tasklist”. It will divide a tasklist into multiple logical partitions, which can distribute tasks to multiple Matching service nodes. By default this feature is not enabled because there is some performance penalty on the server side, plus it’s not common that a tasklist needs to support more than hundreds tasks per second.")]),e._v(" "),a("p",[e._v("You must make a dynamic configuration change in Cadence server to use this feature:")]),e._v(" "),a("p",[a("strong",[e._v("matching.numTasklistWritePartitions")])]),e._v(" "),a("p",[e._v("and")]),e._v(" "),a("p",[a("strong",[e._v("matching.numTasklistReadPartitions")])]),e._v(" "),a("p",[e._v("matching.numTasklistWritePartitions is the number of partitions when a Cadence server sends a task to the tasklist.\nmatching.numTasklistReadPartitions is the number of partitions when your worker accepts a task from the tasklist.")]),e._v(" "),a("p",[e._v("There are a few things to know when using this feature:")]),e._v(" "),a("ul",[a("li",[e._v("Always make sure "),a("code",[e._v("matching.numTasklistWritePartitions <= matching.numTasklistReadPartitions")]),e._v(" . Otherwise there may be some tasks that are sent to a tasklist partition but no poller(worker) will be able to pick up.")]),e._v(" "),a("li",[e._v("Because of above, when scaling down the number of partitions, you must decrease the WritePartitions first, to wait for a certain time to ensure that tasks are drained, and then decrease ReadPartitions.")]),e._v(" "),a("li",[e._v("Both domain names and taskListName should be specified in the dynamic config. An example of using this feature. See more details about dynamic config format using file based "),a("RouterLink",{attrs:{to:"/docs/operation-guide/setup/#static-configs"}},[e._v("dynamic config")]),e._v(".")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('matching.numTasklistWritePartitions:\n  - value: 10\n    constraints:\n      domainName: "samples-domain"\n      taskListName: "aScalableTasklistName"\nmatching.numTasklistReadPartitions:\n  - value: 10\n    constraints:\n      domainName: "samples-domain"\n      taskListName: "aScalableTasklistName"\n')])])]),a("p",[e._v("NOTE: the value must be integer without double quotes.")]),e._v(" "),a("h2",{attrs:{id:"restarting-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restarting-server"}},[e._v("#")]),e._v(" Restarting Server")]),e._v(" "),a("p",[e._v("You may want to do rolling restart to keep high availability.")]),e._v(" "),a("h2",{attrs:{id:"upgrading-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-server"}},[e._v("#")]),e._v(" Upgrading Server")]),e._v(" "),a("p",[e._v("Things need to keep in mind before upgrading a cluster:")]),e._v(" "),a("ul",[a("li",[e._v("Database schema changes need to apply first.")]),e._v(" "),a("li",[e._v("Usually schema change is backward compatible. So rolling back usually is not a problem. It also means that Cadence allows running a mixed version of schema, as long as they are all greater than or equal to the required version of the server.\nOther requirements for upgrading should be found in the release notes. It may contain information about config changes, or special rollback instructions if normal rollback may cause problems.")]),e._v(" "),a("li",[e._v("It's recommended to upgrade one minor version at a time. E.g, if you are at 0.10, you should upgrade to 0.11, stabilize it with running some normal workload to make sure that the upgraded server is happy with the schema changes. After ~1 hour, then upgrade to 0.12. then 0.13. etc.")]),e._v(" "),a("li",[e._v("The reason above is that for each minor upgrade, you should be able to follow the release notes about what you should do for upgrading. The release notes may require you to run some commands. This will also help to narrow down the cause when something goes wrong.")]),e._v(" "),a("li",[e._v("Do not use “auto-setup” images to upgrade your schema. It's mainly for development. At most for initial setup only.")])]),e._v(" "),a("p",[e._v("For how to upgrade database schema, refer to this doc: "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/tools/sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL tool README"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/tools/cassandra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cassandra tool README"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The tool makes use of a table called “schema_versions” to keep track of upgrading History. But there is no transaction guarantee for cross table operations. So in case of some error, you may need to fix or apply schema change manually.\nAlso, the schema tool by default will upgrade schema to the latest, so no manual is required. ( you can also specify to let it upgrade to any place, like 0.14).")]),e._v(" "),a("p",[e._v("Database schema changes are versioned in the folders: "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/schema/mysql/v57/cadence/versioned",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioned Schema Changes"),a("OutboundLink")],1),e._v(" for Default Store\nand "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/schema/mysql/v57/visibility/versioned",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioned Schema Changes"),a("OutboundLink")],1),e._v(" for Visibility Store if you use database for basic visibility instead of ElasticSearch.")])])}),[],!1,null,null,null);t.default=r.exports}}]);