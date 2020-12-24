import { FixedObject, FluidObject } from 'gatsby-image';
import { ReactChild, ReactChildren } from 'react';

export type ContextProps = {
  modalVisible: boolean;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface IndexProps {
  className?: string;
}
export interface IndexProps {
  location: Location;
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    allContentfulPost: {
      edges: PostNode[];
    };
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  };
}
export interface PageTemplateProps {
  location: Location;
  data: {
    allContentfulPost: {
      edges: PostNode[];
    };
    relatedPosts: {
      totalCount: number;
      edges: PostNode[];
    };
  };
  pageContext: {
    prev: Post;
    next: Post;
  };
}
export interface TagTemplateProps {
  location: Location;
  data: {
    allContentfulTag: {
      edges: TagNode[];
    };
    allContentfulPost: {
      totalCount: number;
      edges: PostNode[];
    };
  };
}
export interface AuthorTemplateProps {
  location: Location;
  data: {
    allContentfulAuthor: {
      edges: AuthorNode[];
    };
    allContentfulPost: {
      totalCount: number;
      edges: PostNode[];
    };
  };
}
export interface TagNode {
  node: Tag;
}
export interface PostNode {
  node: Post;
}
export interface AuthorNode {
  node: Author;
}
export interface Post {
  title: string;
  slug: string;
  excerpt?: string;
  updatedAt?: Date;
  featured?: boolean;
  hero?: ImageObject;
  body?: {
    childMarkdownRemark: {
      htmlAst: JSON;
      timeToRead: number;
    };
  };
  tags?: Tag[];
  author?: Author[];
}
export interface Author {
  name: string;
  slug: string;
  location?: string;
  subtitle?: string;
  social?: string[];
  personal_info?: {
    childMarkdownRemark: {
      htmlAst: JSON;
    };
  };
  avatar?: ImageObject;
  profileImage?: ImageObject;
}

export interface ImageObject {
  fluid: FluidObject;
  fixed: FixedObject;
}
export interface Tag {
  slug: string;
  tagName: string;
  description?: {
    raw: string;
  };
  image?: ImageObject;
}

export interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: PostNode[];
    };
  };
}

export interface WrapperProps {
  className?: string;
}

export interface ReadNextProps {
  tags: Tag[];
  currentPageSlug: string;
  relatedPosts: {
    totalCount: number;
    edges: PostNode[];
  };
  pageContext: {
    prev: Post;
    next: Post;
  };
}

export interface PostContentProps {
  htmlAst: JSON;
}

export interface PostCardProps {
  post: Post;
  large?: boolean;
}

export interface PaginationProps {
  currentPage: number;
  numPages: number;
}

export interface AuthorListItemProps {
  tooltip: 'small' | 'large';
  author: Author;
}

export interface AuthorListProps {
  tooltip: 'small' | 'large';
  authors: Author[];
}

export interface SeoProps {
  seoTitle?: string;
  seoDescription?: string;
  imageSrc?: string;
  pathname?: string;
}

export interface Socials {
  name: string;
  color: string;
  link: string;
  showInHeader: boolean;
}
