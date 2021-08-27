# Challenge

## Approach

I'm not 100% sure that I fully understand the challenge, because of that I tried to solve the challenge with a single recursive function that will take care of all the actions available in the API.

Since the max time is 2 hours I could not complete beyond the update, since I struggled with the concept of how to modify the tree and then sending it back (that's why I later decided to modify it in place)

## Database Schema

When working with tree data structures, we can work either with NoSQL databases (using JSON documents to store the tree) or using a SQL database like MySQL that allows you to store JSON files.

If I needed to choose one, I would go with a NoSQL database since there is not much relationship outside the tree itself.

The Schema will contain:

```gql
type Storage {
  tree: TreeNode
}

type TreeNode {
  ID: {
    label: String,
    children: [TreeNode]
  }
}
```

## Query Examples

- GET http://localhost:3001/api/tree

- POST http://localhost:3001/api/tree
  
    {
      "parent": "6724ed3f-3367-4e72-976f-3b9ad975557a",
      "label": "Perro"
    }

- DELETE http://localhost:3001/api/tree/e923c915-270f-4091-9f33-e8d28e46abe7


