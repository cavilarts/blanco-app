/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
      id
      name
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
      id
      name
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
      id
      name
      createdAt
      updatedAt
      owner
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      blogID
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        owner
        posts {
          nextToken
        }
      }
      owner
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      content
      createdAt
      updatedAt
      post {
        id
        title
        blogID
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
          owner
        }
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
