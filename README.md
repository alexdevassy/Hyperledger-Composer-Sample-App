# Hyperledger-Composer-Sample-App
Sample money transfer application in hyperledger composer 
Over View

In this tutorial we will create and deploy a business network from scratch, which defines functions to make users, their accounts, and transfer money from one account to another.
Prerequisites

Docker, NPM, Node JS.

Wait don’t be scared, as we wish to start from the basis itself, so for the first let us only approach by writing Model, Script and Access Control files on Hyperledger Composer Playground.
Glossary

Composer Playground: To incorporate the various abstractions in the blocks using hyperledger may become a tedious job for beginners, so this is where playground comes to the rescue. Composer playground is an extensive, open development tool set and framework which makes it easier for developers to develop blockchain applications.

Files: A project hosted in Composer playground, requires three files, namely Model, Script and Access Control. The model file as the name suggests, is present to define the domain model for the blockchain network, in here we define things like, participants, assets, transactions, events, concepts. Script file basically is written to describe the business logic. Access Control is present to enlist the permissions for different users.
