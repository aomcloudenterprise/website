---
position: 1
title: UI Extensions
---

UI Extensions allow developers to extend the basic functionality of the DatoCMS administrative area, replacing the default field editors that DatoCMS provides with custom code.

You, the developer, are in charge of writing and hosting the UI Extension. UI Extensions can be implemented with basic HTML and JavaScript, or using more advanced client-side frameworks such as React, Angular or Vue.

Technically speaking UI Extensions are small HTML5 applications that exist in a sandboxed `<iframe>` and interact with the main DatoCMS webapp through a JS library you need to include — the [UI Extensions SDK](/docs/ui-extensions/sdk-reference/).

### Two types of extensions

In DatoCMS you can build two different kinds of extensions:

* **Single field extensions** reside in the record editor body and operate on top of a particular field (or set of fields);
* **Sidebar extensions** reside on the sidebar of the record editor and make it possible add custom behaviour based on the state of the entire record instead of a single field.

