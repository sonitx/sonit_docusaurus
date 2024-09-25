---
sidebar_position: 1
---

# Build LLM Application by Golang

## 1. A RAG server for Q&A

Retrieval Augmented Generation (RAG) is one of the most scalable ways of customizing an LLM’s knowledge base for domain-specific interactions.

We'll build a RAG server by Golang. This is an HTTP server that provides two operations to users:
* Add a document to the knowledge base
* Ask an LLM a question about this knowledge base

This is a diagram for the system we need to implement today:

![RAG Server Diagram](../img/rag-server-diagram.png)

RAG server have 3 main components:
* Embedding model: calculate vector embeddings for the submitted documents and for user questions
* Vector database: for storing and retrieving embeddings efficiently
* LLM: for asking questions based on context collected from the knowledge base.

## 2. Define API

## 3. Build app with Gemini API and Weaviate directly