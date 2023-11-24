# Understanding the Concept of Vitual DOM Fibre and reconciliation :


# Vitual DOM
^^^^^^^^^^^^^^

Q. What is Vitual DOM ?
Q. In this do We actually Vitual DOM ?
Q. Is Vitual DOM outdated ?


=> To understand the concept of Vitual DOM first understand  createRoot() method .

Here we see behind the seen what createRoot() does.
---------------------------------------------------

The createRoot method behind the seen create DOM tree like structure in the React Vitual DOM.

The createRoot method helps to create a new "root" for rendering components in a way that optimizes performance. 


Why react need to create DOM like structure ?

-> Because it compares Main DOM and its own DOM and update only those thing that is actually changed not the Complete DOM. But in simple js browser remove the whole DOM and repaint new DOM , that is called page loading ,web Structure building again and again even we perform minor changes.

-> But In react Vitual DOM you can track whole Vitual DOM in tree like structure and update only those value which is canged.


-> But Suppose some components depend on network for UI updation ,and Before it could be updated , another update came and again same . 

Then how many time react update it ?

-> But if the updation in UI is wait  for some times , by using optimization algorithm.
  thats why no intermediate updation is taken place only final updation take place .

  "This all query come in react Team  that it is necesaay to instanteniously update each UI ?
  If we do some updated call ?
  can we draw propagated call and send new call ?
  So that a better algorithm is designed for UI upgradation .   
  "

-> The new Algorithm is made to update Virtual DOM and this algo is called "FIber".  
------------------------------------------------------------------------------------




# FIber 
^^^^^^^^

These fibre algorithm give features like we pause abort and give priorities to the "updates", we made these feature is called "Hydration".


Firstly web layout/UI is created by react and after that js components is injected to that html , this process is called hydration.


Here also a term came called "Reconciliation" in react 
-------------------------------------------------------

The “reconciliation” algorithm in React is how the decision to re-render the component is made.
In simple term “reconciliation” algorithm use to differentiate new vitual DOM tree with browser tree to determine which part is to be changed . Like same the "git" do So that we can easily understand the changes in the new file in respect to old file and update the difference.


“Reconciliation” is the algorithm behind the scene ,  which is popularly understand as 
---------------------------------------------------------------------------------------
“Virtual DOM”.
-------------



--> We do not think how to go from one state to other state , how to update variables ?,this is not our work this all work is done by the react algorithm behind the seen .

--> When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.


Q. Why we use keys in different iterable lists?
ans - Because Fiber algorithm use key to improve list performance.
