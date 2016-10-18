# Snapshot
Flexible data store supporting quick data entry and powerful analysis. http://snapshot.meteorapp.com

## Features and bugs
- Large
  - [ ] Allow linking between different document types
  - [ ] Allow creation of documents multiple levels deep, e.g. creating organization and people at the same time
  - [ ] Analytics
  - [ ] Aliasing (e.g. “MAU” == “Monthly-actives”)
- Medium
  - [ ] Suggestions as I type: suggest key based on current type
  - [ ] Suggestions as I type: suggest value based on current key
  - [ ] Accounts (initially they can all share the same data, but the app is unusable if it's not password protected)
- Small
  - [ ] **Enable HTTPS on the deployed server**
  - [ ] In the phrase 'No X's' have been created (and elsewhere?) X should be lowercase
  - [ ] Incorporate a better pluralization algorithm (e.g. 'Company')
  - [ ] Show an alert when a form is submitted successfully
  - [ ] Provide a modal warning explaining what happens when you delete a form type
  - [ ] Select the first collection by default
  - [ ] Provide helpful information on how to get started if no collections exist
  - [ ] Add a loader to the form list

## Design questions
- How should the form list be populated?
- What should happen when you delete a form type?
- Should the table form be pre-populated with anything?
- Should the table form be cleared when you submit the form?
- What interface do we provide for analyzing data and how do we aggregate it?
- How do we handle the “aliasing” problem? (e.g. “MAU” == “Monthly-actives”)

## Kyle's notes

Use Case:
	Create Organization, and then immediately go to form for founders (any subfield)
	Just keep last created form on the page after submission

View Organizations - Toggle between JSON and pretty print

Manually Manage Aliasing

Organizations -> View Organizations -> Use this Organization as Template
	Keep Keys
	Use previous values at placeholders
	Right now there’s not a huge distinction between form types, so maybe it even makes sense to have some template options on the Insert page

 Instead of autosuggest for values, just use a value that’s been used for that key as the placeholder?
	keep this the same every time?

Autosuggest for keys

New Form Type disappears if you don’t label it or add anything
	if you don’t label it but start inserting something, guess the label based on the form

Organize existing forms 

Command Numbers to switch between Form Types

If you start writing an organization form, and switch to a person form, you should be able to start filling out a new form, and a small indicator should show up next to “Organization” in the Form Library to indicate that you have an unsubmitted form
 
Hot Key for Submission

Autofocus on first field after submission or when switching between form types

Archive Deleted Forms and Form Types

Maybe be able to delete rows during insertion?
	Probably not important cause you can just change the key

Maybe sort JSON by keys after submission?

Form Management
In View, right click field -> Filter on X / Sort on X
Managed View allows for manual rearranging and organization into folders
Create a Workbench or something
	Can be temporary or saved

Probably more like
a toolbar on left of Form Library that allows for navigation between
	Insertion
	Management
	Analysis
	Settings

Share Forms, Analysis through email/Quip/inapp

Attach pitch decks or other info to Forms
Attach documents with notes
	Or write notes in app but that requires a whole thing.

Edit Forms after creation

export as csv

deal with M, k, $, Q1, %
