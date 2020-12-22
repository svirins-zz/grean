import { FixedObject, FluidObject } from 'gatsby-image';
import { MetaHTMLAttributes, ReactChild, ReactChildren } from 'react';

export interface SeoProps {
  description?: string;
  lang?: string;
  meta?: Array<MetaHTMLAttributes<HTMLMetaElement>>;
  title: string;
}

export type ContextProps = {
  modalVisible: { isVisible: boolean };
  darkMode: { isDark: boolean };
  switchMode: () => void;
  handleSelect: () => void;
  closeMenu: () => void;
  showMenu: () => void;
  showModal: () => void;
  closeModal: () => void;
};

export interface AuxProps {
  children: ReactChild | ReactChildren;
}

export interface MenuItem {
  name: string;
  link: string;
}

export interface IndexProps {
  className?: string;
}
export interface AuthorTemplateProps {
  location: Location;
  data: {
    logo: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: PageContext;
      }>;
    };
    authorYaml: {
      id: string;
      website?: string;
      twitter?: string;
      facebook?: string;
      location?: string;
      profile_image?: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
      bio?: string;
      avatar: {
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    };
  };
}

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

export interface Author {
  id: string;
  bio: string;
  avatar: {
    children: Array<{
      fluid: FluidObject;
    }>;
  };
}

export interface PageTemplateProps {
  location: Location;
  data: {
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    markdownRemark: {
      html: string;
      htmlAst: any;
      excerpt: string;
      timeToRead: string;
      frontmatter: {
        title: string;
        date: string;
        userDate: string;
        image: {
          childImageSharp: {
            fluid: any;
          };
        };
        excerpt: string;
        tags: string[];
        author: Author[];
      };
    };
    relatedPosts: {
      totalCount: number;
      edges: Array<{
        node: {
          timeToRead: number;
          frontmatter: {
            title: string;
            date: string;
          };
          fields: {
            slug: string;
          };
        };
      }>;
    };
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}

export interface PageContext {
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    image: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
    excerpt: string;
    title: string;
    date: string;
    draft?: boolean;
    tags: string[];
    author: Author[];
  };
}

export interface TagTemplateProps {
  location: Location;
  pageContext: {
    tag: string;
  };
  data: {
    allTagYaml: {
      edges: Array<{
        node: {
          id: string;
          description: string;
          image?: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      }>;
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

export interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

export interface WrapperProps {
  className?: string;
}

export interface ReadNextProps {
  tags: string[];
  currentPageSlug: string;
  relatedPosts: {
    totalCount: number;
    edges: Array<{
      node: {
        timeToRead: number;
        frontmatter: {
          title: string;
          date: string;
        };
        fields: {
          slug: string;
        };
      };
    }>;
  };
}

export interface ReadNextProps {
  tags: string[];
  currentPageSlug: string;
  relatedPosts: {
    totalCount: number;
    edges: Array<{
      node: {
        timeToRead: number;
        frontmatter: {
          date: string;
          title: string;
        };
        fields: {
          slug: string;
        };
      };
    }>;
  };
  pageContext: {
    prev: PageContext;
    next: PageContext;
  };
}
export interface PostContentProps {
  htmlAst: any;
}

export interface PostCardProps {
  post: PageContext;
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
export interface SubscribeProps {
  title: string;
}

export interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

export interface SubscribeState {
  isOpen: boolean;
}

export interface SiteNavProps {
  isHome?: boolean;
  isPost?: boolean;
  post?: any;
}

export interface SiteNavState {
  showTitle: boolean;
}

export interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}
