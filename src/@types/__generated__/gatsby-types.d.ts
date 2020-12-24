/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
};











type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  readonly toFormat: Maybe<ImageFormat>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type ContentfulAsset = ContentfulReference & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly file: Maybe<ContentfulAssetFile>;
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly node_locale: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulAssetSys>;
  readonly fixed: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ContentfulResolutions>;
  readonly fluid: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ContentfulSizes>;
  readonly resize: Maybe<ContentfulResize>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulAsset_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAsset_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


type ContentfulAsset_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


type ContentfulAsset_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

type ContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAssetGroupConnection>;
};


type ContentfulAssetConnection_distinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


type ContentfulAssetConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

type ContentfulAssetEdge = {
  readonly next: Maybe<ContentfulAsset>;
  readonly node: ContentfulAsset;
  readonly previous: Maybe<ContentfulAsset>;
};

enum ContentfulAssetFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  file___url = 'file.url',
  file___details___size = 'file.details.size',
  file___details___image___width = 'file.details.image.width',
  file___details___image___height = 'file.details.image.height',
  file___fileName = 'file.fileName',
  file___contentType = 'file.contentType',
  title = 'title',
  description = 'description',
  node_locale = 'node_locale',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  resize___base64 = 'resize.base64',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___src = 'resize.src',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulAssetFile = {
  readonly url: Maybe<Scalars['String']>;
  readonly details: Maybe<ContentfulAssetFileDetails>;
  readonly fileName: Maybe<Scalars['String']>;
  readonly contentType: Maybe<Scalars['String']>;
};

type ContentfulAssetFileDetails = {
  readonly size: Maybe<Scalars['Int']>;
  readonly image: Maybe<ContentfulAssetFileDetailsImage>;
};

type ContentfulAssetFileDetailsFilterInput = {
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly image: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

type ContentfulAssetFileDetailsImage = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type ContentfulAssetFileDetailsImageFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ContentfulAssetFileFilterInput = {
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly details: Maybe<ContentfulAssetFileDetailsFilterInput>;
  readonly fileName: Maybe<StringQueryOperatorInput>;
  readonly contentType: Maybe<StringQueryOperatorInput>;
};

type ContentfulAssetFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly file: Maybe<ContentfulAssetFileFilterInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAssetSysFilterInput>;
  readonly fixed: Maybe<ContentfulFixedFilterInput>;
  readonly resolutions: Maybe<ContentfulResolutionsFilterInput>;
  readonly fluid: Maybe<ContentfulFluidFilterInput>;
  readonly sizes: Maybe<ContentfulSizesFilterInput>;
  readonly resize: Maybe<ContentfulResizeFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<ContentfulAsset>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulAssetSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAssetFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAssetSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
};

type ContentfulAssetSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
};

type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly social: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly location: Maybe<Scalars['String']>;
  readonly avatar: Maybe<ContentfulAsset>;
  readonly profileImage: Maybe<ContentfulAsset>;
  readonly post: Maybe<ReadonlyArray<Maybe<ContentfulPost>>>;
  readonly personal_info: Maybe<contentfulAuthorPersonalInfoTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulAuthorSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childContentfulAuthorPersonalInfoTextNode: Maybe<contentfulAuthorPersonalInfoTextNode>;
};


type ContentfulAuthor_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulAuthor_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulAuthorConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulAuthorGroupConnection>;
};


type ContentfulAuthorConnection_distinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


type ContentfulAuthorConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

type ContentfulAuthorEdge = {
  readonly next: Maybe<ContentfulAuthor>;
  readonly node: ContentfulAuthor;
  readonly previous: Maybe<ContentfulAuthor>;
};

enum ContentfulAuthorFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  name = 'name',
  subtitle = 'subtitle',
  slug = 'slug',
  social = 'social',
  featured = 'featured',
  location = 'location',
  avatar___contentful_id = 'avatar.contentful_id',
  avatar___id = 'avatar.id',
  avatar___spaceId = 'avatar.spaceId',
  avatar___createdAt = 'avatar.createdAt',
  avatar___updatedAt = 'avatar.updatedAt',
  avatar___file___url = 'avatar.file.url',
  avatar___file___details___size = 'avatar.file.details.size',
  avatar___file___fileName = 'avatar.file.fileName',
  avatar___file___contentType = 'avatar.file.contentType',
  avatar___title = 'avatar.title',
  avatar___description = 'avatar.description',
  avatar___node_locale = 'avatar.node_locale',
  avatar___sys___type = 'avatar.sys.type',
  avatar___sys___revision = 'avatar.sys.revision',
  avatar___fixed___base64 = 'avatar.fixed.base64',
  avatar___fixed___tracedSVG = 'avatar.fixed.tracedSVG',
  avatar___fixed___aspectRatio = 'avatar.fixed.aspectRatio',
  avatar___fixed___width = 'avatar.fixed.width',
  avatar___fixed___height = 'avatar.fixed.height',
  avatar___fixed___src = 'avatar.fixed.src',
  avatar___fixed___srcSet = 'avatar.fixed.srcSet',
  avatar___fixed___srcWebp = 'avatar.fixed.srcWebp',
  avatar___fixed___srcSetWebp = 'avatar.fixed.srcSetWebp',
  avatar___resolutions___base64 = 'avatar.resolutions.base64',
  avatar___resolutions___tracedSVG = 'avatar.resolutions.tracedSVG',
  avatar___resolutions___aspectRatio = 'avatar.resolutions.aspectRatio',
  avatar___resolutions___width = 'avatar.resolutions.width',
  avatar___resolutions___height = 'avatar.resolutions.height',
  avatar___resolutions___src = 'avatar.resolutions.src',
  avatar___resolutions___srcSet = 'avatar.resolutions.srcSet',
  avatar___resolutions___srcWebp = 'avatar.resolutions.srcWebp',
  avatar___resolutions___srcSetWebp = 'avatar.resolutions.srcSetWebp',
  avatar___fluid___base64 = 'avatar.fluid.base64',
  avatar___fluid___tracedSVG = 'avatar.fluid.tracedSVG',
  avatar___fluid___aspectRatio = 'avatar.fluid.aspectRatio',
  avatar___fluid___src = 'avatar.fluid.src',
  avatar___fluid___srcSet = 'avatar.fluid.srcSet',
  avatar___fluid___srcWebp = 'avatar.fluid.srcWebp',
  avatar___fluid___srcSetWebp = 'avatar.fluid.srcSetWebp',
  avatar___fluid___sizes = 'avatar.fluid.sizes',
  avatar___sizes___base64 = 'avatar.sizes.base64',
  avatar___sizes___tracedSVG = 'avatar.sizes.tracedSVG',
  avatar___sizes___aspectRatio = 'avatar.sizes.aspectRatio',
  avatar___sizes___src = 'avatar.sizes.src',
  avatar___sizes___srcSet = 'avatar.sizes.srcSet',
  avatar___sizes___srcWebp = 'avatar.sizes.srcWebp',
  avatar___sizes___srcSetWebp = 'avatar.sizes.srcSetWebp',
  avatar___sizes___sizes = 'avatar.sizes.sizes',
  avatar___resize___base64 = 'avatar.resize.base64',
  avatar___resize___tracedSVG = 'avatar.resize.tracedSVG',
  avatar___resize___src = 'avatar.resize.src',
  avatar___resize___width = 'avatar.resize.width',
  avatar___resize___height = 'avatar.resize.height',
  avatar___resize___aspectRatio = 'avatar.resize.aspectRatio',
  avatar___parent___id = 'avatar.parent.id',
  avatar___parent___parent___id = 'avatar.parent.parent.id',
  avatar___parent___parent___children = 'avatar.parent.parent.children',
  avatar___parent___children = 'avatar.parent.children',
  avatar___parent___children___id = 'avatar.parent.children.id',
  avatar___parent___children___children = 'avatar.parent.children.children',
  avatar___parent___internal___content = 'avatar.parent.internal.content',
  avatar___parent___internal___contentDigest = 'avatar.parent.internal.contentDigest',
  avatar___parent___internal___description = 'avatar.parent.internal.description',
  avatar___parent___internal___fieldOwners = 'avatar.parent.internal.fieldOwners',
  avatar___parent___internal___ignoreType = 'avatar.parent.internal.ignoreType',
  avatar___parent___internal___mediaType = 'avatar.parent.internal.mediaType',
  avatar___parent___internal___owner = 'avatar.parent.internal.owner',
  avatar___parent___internal___type = 'avatar.parent.internal.type',
  avatar___children = 'avatar.children',
  avatar___children___id = 'avatar.children.id',
  avatar___children___parent___id = 'avatar.children.parent.id',
  avatar___children___parent___children = 'avatar.children.parent.children',
  avatar___children___children = 'avatar.children.children',
  avatar___children___children___id = 'avatar.children.children.id',
  avatar___children___children___children = 'avatar.children.children.children',
  avatar___children___internal___content = 'avatar.children.internal.content',
  avatar___children___internal___contentDigest = 'avatar.children.internal.contentDigest',
  avatar___children___internal___description = 'avatar.children.internal.description',
  avatar___children___internal___fieldOwners = 'avatar.children.internal.fieldOwners',
  avatar___children___internal___ignoreType = 'avatar.children.internal.ignoreType',
  avatar___children___internal___mediaType = 'avatar.children.internal.mediaType',
  avatar___children___internal___owner = 'avatar.children.internal.owner',
  avatar___children___internal___type = 'avatar.children.internal.type',
  avatar___internal___content = 'avatar.internal.content',
  avatar___internal___contentDigest = 'avatar.internal.contentDigest',
  avatar___internal___description = 'avatar.internal.description',
  avatar___internal___fieldOwners = 'avatar.internal.fieldOwners',
  avatar___internal___ignoreType = 'avatar.internal.ignoreType',
  avatar___internal___mediaType = 'avatar.internal.mediaType',
  avatar___internal___owner = 'avatar.internal.owner',
  avatar___internal___type = 'avatar.internal.type',
  profileImage___contentful_id = 'profileImage.contentful_id',
  profileImage___id = 'profileImage.id',
  profileImage___spaceId = 'profileImage.spaceId',
  profileImage___createdAt = 'profileImage.createdAt',
  profileImage___updatedAt = 'profileImage.updatedAt',
  profileImage___file___url = 'profileImage.file.url',
  profileImage___file___details___size = 'profileImage.file.details.size',
  profileImage___file___fileName = 'profileImage.file.fileName',
  profileImage___file___contentType = 'profileImage.file.contentType',
  profileImage___title = 'profileImage.title',
  profileImage___description = 'profileImage.description',
  profileImage___node_locale = 'profileImage.node_locale',
  profileImage___sys___type = 'profileImage.sys.type',
  profileImage___sys___revision = 'profileImage.sys.revision',
  profileImage___fixed___base64 = 'profileImage.fixed.base64',
  profileImage___fixed___tracedSVG = 'profileImage.fixed.tracedSVG',
  profileImage___fixed___aspectRatio = 'profileImage.fixed.aspectRatio',
  profileImage___fixed___width = 'profileImage.fixed.width',
  profileImage___fixed___height = 'profileImage.fixed.height',
  profileImage___fixed___src = 'profileImage.fixed.src',
  profileImage___fixed___srcSet = 'profileImage.fixed.srcSet',
  profileImage___fixed___srcWebp = 'profileImage.fixed.srcWebp',
  profileImage___fixed___srcSetWebp = 'profileImage.fixed.srcSetWebp',
  profileImage___resolutions___base64 = 'profileImage.resolutions.base64',
  profileImage___resolutions___tracedSVG = 'profileImage.resolutions.tracedSVG',
  profileImage___resolutions___aspectRatio = 'profileImage.resolutions.aspectRatio',
  profileImage___resolutions___width = 'profileImage.resolutions.width',
  profileImage___resolutions___height = 'profileImage.resolutions.height',
  profileImage___resolutions___src = 'profileImage.resolutions.src',
  profileImage___resolutions___srcSet = 'profileImage.resolutions.srcSet',
  profileImage___resolutions___srcWebp = 'profileImage.resolutions.srcWebp',
  profileImage___resolutions___srcSetWebp = 'profileImage.resolutions.srcSetWebp',
  profileImage___fluid___base64 = 'profileImage.fluid.base64',
  profileImage___fluid___tracedSVG = 'profileImage.fluid.tracedSVG',
  profileImage___fluid___aspectRatio = 'profileImage.fluid.aspectRatio',
  profileImage___fluid___src = 'profileImage.fluid.src',
  profileImage___fluid___srcSet = 'profileImage.fluid.srcSet',
  profileImage___fluid___srcWebp = 'profileImage.fluid.srcWebp',
  profileImage___fluid___srcSetWebp = 'profileImage.fluid.srcSetWebp',
  profileImage___fluid___sizes = 'profileImage.fluid.sizes',
  profileImage___sizes___base64 = 'profileImage.sizes.base64',
  profileImage___sizes___tracedSVG = 'profileImage.sizes.tracedSVG',
  profileImage___sizes___aspectRatio = 'profileImage.sizes.aspectRatio',
  profileImage___sizes___src = 'profileImage.sizes.src',
  profileImage___sizes___srcSet = 'profileImage.sizes.srcSet',
  profileImage___sizes___srcWebp = 'profileImage.sizes.srcWebp',
  profileImage___sizes___srcSetWebp = 'profileImage.sizes.srcSetWebp',
  profileImage___sizes___sizes = 'profileImage.sizes.sizes',
  profileImage___resize___base64 = 'profileImage.resize.base64',
  profileImage___resize___tracedSVG = 'profileImage.resize.tracedSVG',
  profileImage___resize___src = 'profileImage.resize.src',
  profileImage___resize___width = 'profileImage.resize.width',
  profileImage___resize___height = 'profileImage.resize.height',
  profileImage___resize___aspectRatio = 'profileImage.resize.aspectRatio',
  profileImage___parent___id = 'profileImage.parent.id',
  profileImage___parent___parent___id = 'profileImage.parent.parent.id',
  profileImage___parent___parent___children = 'profileImage.parent.parent.children',
  profileImage___parent___children = 'profileImage.parent.children',
  profileImage___parent___children___id = 'profileImage.parent.children.id',
  profileImage___parent___children___children = 'profileImage.parent.children.children',
  profileImage___parent___internal___content = 'profileImage.parent.internal.content',
  profileImage___parent___internal___contentDigest = 'profileImage.parent.internal.contentDigest',
  profileImage___parent___internal___description = 'profileImage.parent.internal.description',
  profileImage___parent___internal___fieldOwners = 'profileImage.parent.internal.fieldOwners',
  profileImage___parent___internal___ignoreType = 'profileImage.parent.internal.ignoreType',
  profileImage___parent___internal___mediaType = 'profileImage.parent.internal.mediaType',
  profileImage___parent___internal___owner = 'profileImage.parent.internal.owner',
  profileImage___parent___internal___type = 'profileImage.parent.internal.type',
  profileImage___children = 'profileImage.children',
  profileImage___children___id = 'profileImage.children.id',
  profileImage___children___parent___id = 'profileImage.children.parent.id',
  profileImage___children___parent___children = 'profileImage.children.parent.children',
  profileImage___children___children = 'profileImage.children.children',
  profileImage___children___children___id = 'profileImage.children.children.id',
  profileImage___children___children___children = 'profileImage.children.children.children',
  profileImage___children___internal___content = 'profileImage.children.internal.content',
  profileImage___children___internal___contentDigest = 'profileImage.children.internal.contentDigest',
  profileImage___children___internal___description = 'profileImage.children.internal.description',
  profileImage___children___internal___fieldOwners = 'profileImage.children.internal.fieldOwners',
  profileImage___children___internal___ignoreType = 'profileImage.children.internal.ignoreType',
  profileImage___children___internal___mediaType = 'profileImage.children.internal.mediaType',
  profileImage___children___internal___owner = 'profileImage.children.internal.owner',
  profileImage___children___internal___type = 'profileImage.children.internal.type',
  profileImage___internal___content = 'profileImage.internal.content',
  profileImage___internal___contentDigest = 'profileImage.internal.contentDigest',
  profileImage___internal___description = 'profileImage.internal.description',
  profileImage___internal___fieldOwners = 'profileImage.internal.fieldOwners',
  profileImage___internal___ignoreType = 'profileImage.internal.ignoreType',
  profileImage___internal___mediaType = 'profileImage.internal.mediaType',
  profileImage___internal___owner = 'profileImage.internal.owner',
  profileImage___internal___type = 'profileImage.internal.type',
  post = 'post',
  post___contentful_id = 'post.contentful_id',
  post___id = 'post.id',
  post___node_locale = 'post.node_locale',
  post___title = 'post.title',
  post___featured = 'post.featured',
  post___slug = 'post.slug',
  post___date = 'post.date',
  post___excerpt = 'post.excerpt',
  post___author = 'post.author',
  post___author___contentful_id = 'post.author.contentful_id',
  post___author___id = 'post.author.id',
  post___author___node_locale = 'post.author.node_locale',
  post___author___name = 'post.author.name',
  post___author___subtitle = 'post.author.subtitle',
  post___author___slug = 'post.author.slug',
  post___author___social = 'post.author.social',
  post___author___featured = 'post.author.featured',
  post___author___location = 'post.author.location',
  post___author___avatar___contentful_id = 'post.author.avatar.contentful_id',
  post___author___avatar___id = 'post.author.avatar.id',
  post___author___avatar___spaceId = 'post.author.avatar.spaceId',
  post___author___avatar___createdAt = 'post.author.avatar.createdAt',
  post___author___avatar___updatedAt = 'post.author.avatar.updatedAt',
  post___author___avatar___title = 'post.author.avatar.title',
  post___author___avatar___description = 'post.author.avatar.description',
  post___author___avatar___node_locale = 'post.author.avatar.node_locale',
  post___author___avatar___children = 'post.author.avatar.children',
  post___author___profileImage___contentful_id = 'post.author.profileImage.contentful_id',
  post___author___profileImage___id = 'post.author.profileImage.id',
  post___author___profileImage___spaceId = 'post.author.profileImage.spaceId',
  post___author___profileImage___createdAt = 'post.author.profileImage.createdAt',
  post___author___profileImage___updatedAt = 'post.author.profileImage.updatedAt',
  post___author___profileImage___title = 'post.author.profileImage.title',
  post___author___profileImage___description = 'post.author.profileImage.description',
  post___author___profileImage___node_locale = 'post.author.profileImage.node_locale',
  post___author___profileImage___children = 'post.author.profileImage.children',
  post___author___post = 'post.author.post',
  post___author___post___contentful_id = 'post.author.post.contentful_id',
  post___author___post___id = 'post.author.post.id',
  post___author___post___node_locale = 'post.author.post.node_locale',
  post___author___post___title = 'post.author.post.title',
  post___author___post___featured = 'post.author.post.featured',
  post___author___post___slug = 'post.author.post.slug',
  post___author___post___date = 'post.author.post.date',
  post___author___post___excerpt = 'post.author.post.excerpt',
  post___author___post___author = 'post.author.post.author',
  post___author___post___tags = 'post.author.post.tags',
  post___author___post___spaceId = 'post.author.post.spaceId',
  post___author___post___createdAt = 'post.author.post.createdAt',
  post___author___post___updatedAt = 'post.author.post.updatedAt',
  post___author___post___children = 'post.author.post.children',
  post___author___personal_info___id = 'post.author.personal_info.id',
  post___author___personal_info___children = 'post.author.personal_info.children',
  post___author___personal_info___personal_info = 'post.author.personal_info.personal_info',
  post___author___spaceId = 'post.author.spaceId',
  post___author___createdAt = 'post.author.createdAt',
  post___author___updatedAt = 'post.author.updatedAt',
  post___author___sys___type = 'post.author.sys.type',
  post___author___sys___revision = 'post.author.sys.revision',
  post___author___parent___id = 'post.author.parent.id',
  post___author___parent___children = 'post.author.parent.children',
  post___author___children = 'post.author.children',
  post___author___children___id = 'post.author.children.id',
  post___author___children___children = 'post.author.children.children',
  post___author___internal___content = 'post.author.internal.content',
  post___author___internal___contentDigest = 'post.author.internal.contentDigest',
  post___author___internal___description = 'post.author.internal.description',
  post___author___internal___fieldOwners = 'post.author.internal.fieldOwners',
  post___author___internal___ignoreType = 'post.author.internal.ignoreType',
  post___author___internal___mediaType = 'post.author.internal.mediaType',
  post___author___internal___owner = 'post.author.internal.owner',
  post___author___internal___type = 'post.author.internal.type',
  post___author___childContentfulAuthorPersonalInfoTextNode___id = 'post.author.childContentfulAuthorPersonalInfoTextNode.id',
  post___author___childContentfulAuthorPersonalInfoTextNode___children = 'post.author.childContentfulAuthorPersonalInfoTextNode.children',
  post___author___childContentfulAuthorPersonalInfoTextNode___personal_info = 'post.author.childContentfulAuthorPersonalInfoTextNode.personal_info',
  post___hero___contentful_id = 'post.hero.contentful_id',
  post___hero___id = 'post.hero.id',
  post___hero___spaceId = 'post.hero.spaceId',
  post___hero___createdAt = 'post.hero.createdAt',
  post___hero___updatedAt = 'post.hero.updatedAt',
  post___hero___file___url = 'post.hero.file.url',
  post___hero___file___fileName = 'post.hero.file.fileName',
  post___hero___file___contentType = 'post.hero.file.contentType',
  post___hero___title = 'post.hero.title',
  post___hero___description = 'post.hero.description',
  post___hero___node_locale = 'post.hero.node_locale',
  post___hero___sys___type = 'post.hero.sys.type',
  post___hero___sys___revision = 'post.hero.sys.revision',
  post___hero___fixed___base64 = 'post.hero.fixed.base64',
  post___hero___fixed___tracedSVG = 'post.hero.fixed.tracedSVG',
  post___hero___fixed___aspectRatio = 'post.hero.fixed.aspectRatio',
  post___hero___fixed___width = 'post.hero.fixed.width',
  post___hero___fixed___height = 'post.hero.fixed.height',
  post___hero___fixed___src = 'post.hero.fixed.src',
  post___hero___fixed___srcSet = 'post.hero.fixed.srcSet',
  post___hero___fixed___srcWebp = 'post.hero.fixed.srcWebp',
  post___hero___fixed___srcSetWebp = 'post.hero.fixed.srcSetWebp',
  post___hero___resolutions___base64 = 'post.hero.resolutions.base64',
  post___hero___resolutions___tracedSVG = 'post.hero.resolutions.tracedSVG',
  post___hero___resolutions___aspectRatio = 'post.hero.resolutions.aspectRatio',
  post___hero___resolutions___width = 'post.hero.resolutions.width',
  post___hero___resolutions___height = 'post.hero.resolutions.height',
  post___hero___resolutions___src = 'post.hero.resolutions.src',
  post___hero___resolutions___srcSet = 'post.hero.resolutions.srcSet',
  post___hero___resolutions___srcWebp = 'post.hero.resolutions.srcWebp',
  post___hero___resolutions___srcSetWebp = 'post.hero.resolutions.srcSetWebp',
  post___hero___fluid___base64 = 'post.hero.fluid.base64',
  post___hero___fluid___tracedSVG = 'post.hero.fluid.tracedSVG',
  post___hero___fluid___aspectRatio = 'post.hero.fluid.aspectRatio',
  post___hero___fluid___src = 'post.hero.fluid.src',
  post___hero___fluid___srcSet = 'post.hero.fluid.srcSet',
  post___hero___fluid___srcWebp = 'post.hero.fluid.srcWebp',
  post___hero___fluid___srcSetWebp = 'post.hero.fluid.srcSetWebp',
  post___hero___fluid___sizes = 'post.hero.fluid.sizes',
  post___hero___sizes___base64 = 'post.hero.sizes.base64',
  post___hero___sizes___tracedSVG = 'post.hero.sizes.tracedSVG',
  post___hero___sizes___aspectRatio = 'post.hero.sizes.aspectRatio',
  post___hero___sizes___src = 'post.hero.sizes.src',
  post___hero___sizes___srcSet = 'post.hero.sizes.srcSet',
  post___hero___sizes___srcWebp = 'post.hero.sizes.srcWebp',
  post___hero___sizes___srcSetWebp = 'post.hero.sizes.srcSetWebp',
  post___hero___sizes___sizes = 'post.hero.sizes.sizes',
  post___hero___resize___base64 = 'post.hero.resize.base64',
  post___hero___resize___tracedSVG = 'post.hero.resize.tracedSVG',
  post___hero___resize___src = 'post.hero.resize.src',
  post___hero___resize___width = 'post.hero.resize.width',
  post___hero___resize___height = 'post.hero.resize.height',
  post___hero___resize___aspectRatio = 'post.hero.resize.aspectRatio',
  post___hero___parent___id = 'post.hero.parent.id',
  post___hero___parent___children = 'post.hero.parent.children',
  post___hero___children = 'post.hero.children',
  post___hero___children___id = 'post.hero.children.id',
  post___hero___children___children = 'post.hero.children.children',
  post___hero___internal___content = 'post.hero.internal.content',
  post___hero___internal___contentDigest = 'post.hero.internal.contentDigest',
  post___hero___internal___description = 'post.hero.internal.description',
  post___hero___internal___fieldOwners = 'post.hero.internal.fieldOwners',
  post___hero___internal___ignoreType = 'post.hero.internal.ignoreType',
  post___hero___internal___mediaType = 'post.hero.internal.mediaType',
  post___hero___internal___owner = 'post.hero.internal.owner',
  post___hero___internal___type = 'post.hero.internal.type',
  post___tags = 'post.tags',
  post___tags___contentful_id = 'post.tags.contentful_id',
  post___tags___id = 'post.tags.id',
  post___tags___node_locale = 'post.tags.node_locale',
  post___tags___tagName = 'post.tags.tagName',
  post___tags___slug = 'post.tags.slug',
  post___tags___description___raw = 'post.tags.description.raw',
  post___tags___image___contentful_id = 'post.tags.image.contentful_id',
  post___tags___image___id = 'post.tags.image.id',
  post___tags___image___spaceId = 'post.tags.image.spaceId',
  post___tags___image___createdAt = 'post.tags.image.createdAt',
  post___tags___image___updatedAt = 'post.tags.image.updatedAt',
  post___tags___image___title = 'post.tags.image.title',
  post___tags___image___description = 'post.tags.image.description',
  post___tags___image___node_locale = 'post.tags.image.node_locale',
  post___tags___image___children = 'post.tags.image.children',
  post___tags___post = 'post.tags.post',
  post___tags___post___contentful_id = 'post.tags.post.contentful_id',
  post___tags___post___id = 'post.tags.post.id',
  post___tags___post___node_locale = 'post.tags.post.node_locale',
  post___tags___post___title = 'post.tags.post.title',
  post___tags___post___featured = 'post.tags.post.featured',
  post___tags___post___slug = 'post.tags.post.slug',
  post___tags___post___date = 'post.tags.post.date',
  post___tags___post___excerpt = 'post.tags.post.excerpt',
  post___tags___post___author = 'post.tags.post.author',
  post___tags___post___tags = 'post.tags.post.tags',
  post___tags___post___spaceId = 'post.tags.post.spaceId',
  post___tags___post___createdAt = 'post.tags.post.createdAt',
  post___tags___post___updatedAt = 'post.tags.post.updatedAt',
  post___tags___post___children = 'post.tags.post.children',
  post___tags___spaceId = 'post.tags.spaceId',
  post___tags___createdAt = 'post.tags.createdAt',
  post___tags___updatedAt = 'post.tags.updatedAt',
  post___tags___sys___type = 'post.tags.sys.type',
  post___tags___sys___revision = 'post.tags.sys.revision',
  post___tags___parent___id = 'post.tags.parent.id',
  post___tags___parent___children = 'post.tags.parent.children',
  post___tags___children = 'post.tags.children',
  post___tags___children___id = 'post.tags.children.id',
  post___tags___children___children = 'post.tags.children.children',
  post___tags___internal___content = 'post.tags.internal.content',
  post___tags___internal___contentDigest = 'post.tags.internal.contentDigest',
  post___tags___internal___description = 'post.tags.internal.description',
  post___tags___internal___fieldOwners = 'post.tags.internal.fieldOwners',
  post___tags___internal___ignoreType = 'post.tags.internal.ignoreType',
  post___tags___internal___mediaType = 'post.tags.internal.mediaType',
  post___tags___internal___owner = 'post.tags.internal.owner',
  post___tags___internal___type = 'post.tags.internal.type',
  post___body___id = 'post.body.id',
  post___body___parent___id = 'post.body.parent.id',
  post___body___parent___children = 'post.body.parent.children',
  post___body___children = 'post.body.children',
  post___body___children___id = 'post.body.children.id',
  post___body___children___children = 'post.body.children.children',
  post___body___internal___content = 'post.body.internal.content',
  post___body___internal___contentDigest = 'post.body.internal.contentDigest',
  post___body___internal___description = 'post.body.internal.description',
  post___body___internal___fieldOwners = 'post.body.internal.fieldOwners',
  post___body___internal___ignoreType = 'post.body.internal.ignoreType',
  post___body___internal___mediaType = 'post.body.internal.mediaType',
  post___body___internal___owner = 'post.body.internal.owner',
  post___body___internal___type = 'post.body.internal.type',
  post___body___body = 'post.body.body',
  post___body___sys___type = 'post.body.sys.type',
  post___body___childMarkdownRemark___id = 'post.body.childMarkdownRemark.id',
  post___body___childMarkdownRemark___excerpt = 'post.body.childMarkdownRemark.excerpt',
  post___body___childMarkdownRemark___rawMarkdownBody = 'post.body.childMarkdownRemark.rawMarkdownBody',
  post___body___childMarkdownRemark___html = 'post.body.childMarkdownRemark.html',
  post___body___childMarkdownRemark___htmlAst = 'post.body.childMarkdownRemark.htmlAst',
  post___body___childMarkdownRemark___excerptAst = 'post.body.childMarkdownRemark.excerptAst',
  post___body___childMarkdownRemark___headings = 'post.body.childMarkdownRemark.headings',
  post___body___childMarkdownRemark___timeToRead = 'post.body.childMarkdownRemark.timeToRead',
  post___body___childMarkdownRemark___tableOfContents = 'post.body.childMarkdownRemark.tableOfContents',
  post___body___childMarkdownRemark___children = 'post.body.childMarkdownRemark.children',
  post___spaceId = 'post.spaceId',
  post___createdAt = 'post.createdAt',
  post___updatedAt = 'post.updatedAt',
  post___sys___type = 'post.sys.type',
  post___sys___revision = 'post.sys.revision',
  post___parent___id = 'post.parent.id',
  post___parent___parent___id = 'post.parent.parent.id',
  post___parent___parent___children = 'post.parent.parent.children',
  post___parent___children = 'post.parent.children',
  post___parent___children___id = 'post.parent.children.id',
  post___parent___children___children = 'post.parent.children.children',
  post___parent___internal___content = 'post.parent.internal.content',
  post___parent___internal___contentDigest = 'post.parent.internal.contentDigest',
  post___parent___internal___description = 'post.parent.internal.description',
  post___parent___internal___fieldOwners = 'post.parent.internal.fieldOwners',
  post___parent___internal___ignoreType = 'post.parent.internal.ignoreType',
  post___parent___internal___mediaType = 'post.parent.internal.mediaType',
  post___parent___internal___owner = 'post.parent.internal.owner',
  post___parent___internal___type = 'post.parent.internal.type',
  post___children = 'post.children',
  post___children___id = 'post.children.id',
  post___children___parent___id = 'post.children.parent.id',
  post___children___parent___children = 'post.children.parent.children',
  post___children___children = 'post.children.children',
  post___children___children___id = 'post.children.children.id',
  post___children___children___children = 'post.children.children.children',
  post___children___internal___content = 'post.children.internal.content',
  post___children___internal___contentDigest = 'post.children.internal.contentDigest',
  post___children___internal___description = 'post.children.internal.description',
  post___children___internal___fieldOwners = 'post.children.internal.fieldOwners',
  post___children___internal___ignoreType = 'post.children.internal.ignoreType',
  post___children___internal___mediaType = 'post.children.internal.mediaType',
  post___children___internal___owner = 'post.children.internal.owner',
  post___children___internal___type = 'post.children.internal.type',
  post___internal___content = 'post.internal.content',
  post___internal___contentDigest = 'post.internal.contentDigest',
  post___internal___description = 'post.internal.description',
  post___internal___fieldOwners = 'post.internal.fieldOwners',
  post___internal___ignoreType = 'post.internal.ignoreType',
  post___internal___mediaType = 'post.internal.mediaType',
  post___internal___owner = 'post.internal.owner',
  post___internal___type = 'post.internal.type',
  post___childContentfulPostBodyTextNode___id = 'post.childContentfulPostBodyTextNode.id',
  post___childContentfulPostBodyTextNode___parent___id = 'post.childContentfulPostBodyTextNode.parent.id',
  post___childContentfulPostBodyTextNode___parent___children = 'post.childContentfulPostBodyTextNode.parent.children',
  post___childContentfulPostBodyTextNode___children = 'post.childContentfulPostBodyTextNode.children',
  post___childContentfulPostBodyTextNode___children___id = 'post.childContentfulPostBodyTextNode.children.id',
  post___childContentfulPostBodyTextNode___children___children = 'post.childContentfulPostBodyTextNode.children.children',
  post___childContentfulPostBodyTextNode___internal___content = 'post.childContentfulPostBodyTextNode.internal.content',
  post___childContentfulPostBodyTextNode___internal___contentDigest = 'post.childContentfulPostBodyTextNode.internal.contentDigest',
  post___childContentfulPostBodyTextNode___internal___description = 'post.childContentfulPostBodyTextNode.internal.description',
  post___childContentfulPostBodyTextNode___internal___fieldOwners = 'post.childContentfulPostBodyTextNode.internal.fieldOwners',
  post___childContentfulPostBodyTextNode___internal___ignoreType = 'post.childContentfulPostBodyTextNode.internal.ignoreType',
  post___childContentfulPostBodyTextNode___internal___mediaType = 'post.childContentfulPostBodyTextNode.internal.mediaType',
  post___childContentfulPostBodyTextNode___internal___owner = 'post.childContentfulPostBodyTextNode.internal.owner',
  post___childContentfulPostBodyTextNode___internal___type = 'post.childContentfulPostBodyTextNode.internal.type',
  post___childContentfulPostBodyTextNode___body = 'post.childContentfulPostBodyTextNode.body',
  post___childContentfulPostBodyTextNode___sys___type = 'post.childContentfulPostBodyTextNode.sys.type',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___id = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.id',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___html = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.html',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.htmlAst',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.excerptAst',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___headings = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.headings',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.timeToRead',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.tableOfContents',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___children = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.children',
  personal_info___id = 'personal_info.id',
  personal_info___parent___id = 'personal_info.parent.id',
  personal_info___parent___parent___id = 'personal_info.parent.parent.id',
  personal_info___parent___parent___children = 'personal_info.parent.parent.children',
  personal_info___parent___children = 'personal_info.parent.children',
  personal_info___parent___children___id = 'personal_info.parent.children.id',
  personal_info___parent___children___children = 'personal_info.parent.children.children',
  personal_info___parent___internal___content = 'personal_info.parent.internal.content',
  personal_info___parent___internal___contentDigest = 'personal_info.parent.internal.contentDigest',
  personal_info___parent___internal___description = 'personal_info.parent.internal.description',
  personal_info___parent___internal___fieldOwners = 'personal_info.parent.internal.fieldOwners',
  personal_info___parent___internal___ignoreType = 'personal_info.parent.internal.ignoreType',
  personal_info___parent___internal___mediaType = 'personal_info.parent.internal.mediaType',
  personal_info___parent___internal___owner = 'personal_info.parent.internal.owner',
  personal_info___parent___internal___type = 'personal_info.parent.internal.type',
  personal_info___children = 'personal_info.children',
  personal_info___children___id = 'personal_info.children.id',
  personal_info___children___parent___id = 'personal_info.children.parent.id',
  personal_info___children___parent___children = 'personal_info.children.parent.children',
  personal_info___children___children = 'personal_info.children.children',
  personal_info___children___children___id = 'personal_info.children.children.id',
  personal_info___children___children___children = 'personal_info.children.children.children',
  personal_info___children___internal___content = 'personal_info.children.internal.content',
  personal_info___children___internal___contentDigest = 'personal_info.children.internal.contentDigest',
  personal_info___children___internal___description = 'personal_info.children.internal.description',
  personal_info___children___internal___fieldOwners = 'personal_info.children.internal.fieldOwners',
  personal_info___children___internal___ignoreType = 'personal_info.children.internal.ignoreType',
  personal_info___children___internal___mediaType = 'personal_info.children.internal.mediaType',
  personal_info___children___internal___owner = 'personal_info.children.internal.owner',
  personal_info___children___internal___type = 'personal_info.children.internal.type',
  personal_info___internal___content = 'personal_info.internal.content',
  personal_info___internal___contentDigest = 'personal_info.internal.contentDigest',
  personal_info___internal___description = 'personal_info.internal.description',
  personal_info___internal___fieldOwners = 'personal_info.internal.fieldOwners',
  personal_info___internal___ignoreType = 'personal_info.internal.ignoreType',
  personal_info___internal___mediaType = 'personal_info.internal.mediaType',
  personal_info___internal___owner = 'personal_info.internal.owner',
  personal_info___internal___type = 'personal_info.internal.type',
  personal_info___personal_info = 'personal_info.personal_info',
  personal_info___sys___type = 'personal_info.sys.type',
  personal_info___childMarkdownRemark___id = 'personal_info.childMarkdownRemark.id',
  personal_info___childMarkdownRemark___frontmatter___title = 'personal_info.childMarkdownRemark.frontmatter.title',
  personal_info___childMarkdownRemark___excerpt = 'personal_info.childMarkdownRemark.excerpt',
  personal_info___childMarkdownRemark___rawMarkdownBody = 'personal_info.childMarkdownRemark.rawMarkdownBody',
  personal_info___childMarkdownRemark___html = 'personal_info.childMarkdownRemark.html',
  personal_info___childMarkdownRemark___htmlAst = 'personal_info.childMarkdownRemark.htmlAst',
  personal_info___childMarkdownRemark___excerptAst = 'personal_info.childMarkdownRemark.excerptAst',
  personal_info___childMarkdownRemark___headings = 'personal_info.childMarkdownRemark.headings',
  personal_info___childMarkdownRemark___headings___id = 'personal_info.childMarkdownRemark.headings.id',
  personal_info___childMarkdownRemark___headings___value = 'personal_info.childMarkdownRemark.headings.value',
  personal_info___childMarkdownRemark___headings___depth = 'personal_info.childMarkdownRemark.headings.depth',
  personal_info___childMarkdownRemark___timeToRead = 'personal_info.childMarkdownRemark.timeToRead',
  personal_info___childMarkdownRemark___tableOfContents = 'personal_info.childMarkdownRemark.tableOfContents',
  personal_info___childMarkdownRemark___wordCount___paragraphs = 'personal_info.childMarkdownRemark.wordCount.paragraphs',
  personal_info___childMarkdownRemark___wordCount___sentences = 'personal_info.childMarkdownRemark.wordCount.sentences',
  personal_info___childMarkdownRemark___wordCount___words = 'personal_info.childMarkdownRemark.wordCount.words',
  personal_info___childMarkdownRemark___parent___id = 'personal_info.childMarkdownRemark.parent.id',
  personal_info___childMarkdownRemark___parent___children = 'personal_info.childMarkdownRemark.parent.children',
  personal_info___childMarkdownRemark___children = 'personal_info.childMarkdownRemark.children',
  personal_info___childMarkdownRemark___children___id = 'personal_info.childMarkdownRemark.children.id',
  personal_info___childMarkdownRemark___children___children = 'personal_info.childMarkdownRemark.children.children',
  personal_info___childMarkdownRemark___internal___content = 'personal_info.childMarkdownRemark.internal.content',
  personal_info___childMarkdownRemark___internal___contentDigest = 'personal_info.childMarkdownRemark.internal.contentDigest',
  personal_info___childMarkdownRemark___internal___description = 'personal_info.childMarkdownRemark.internal.description',
  personal_info___childMarkdownRemark___internal___fieldOwners = 'personal_info.childMarkdownRemark.internal.fieldOwners',
  personal_info___childMarkdownRemark___internal___ignoreType = 'personal_info.childMarkdownRemark.internal.ignoreType',
  personal_info___childMarkdownRemark___internal___mediaType = 'personal_info.childMarkdownRemark.internal.mediaType',
  personal_info___childMarkdownRemark___internal___owner = 'personal_info.childMarkdownRemark.internal.owner',
  personal_info___childMarkdownRemark___internal___type = 'personal_info.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childContentfulAuthorPersonalInfoTextNode___id = 'childContentfulAuthorPersonalInfoTextNode.id',
  childContentfulAuthorPersonalInfoTextNode___parent___id = 'childContentfulAuthorPersonalInfoTextNode.parent.id',
  childContentfulAuthorPersonalInfoTextNode___parent___parent___id = 'childContentfulAuthorPersonalInfoTextNode.parent.parent.id',
  childContentfulAuthorPersonalInfoTextNode___parent___parent___children = 'childContentfulAuthorPersonalInfoTextNode.parent.parent.children',
  childContentfulAuthorPersonalInfoTextNode___parent___children = 'childContentfulAuthorPersonalInfoTextNode.parent.children',
  childContentfulAuthorPersonalInfoTextNode___parent___children___id = 'childContentfulAuthorPersonalInfoTextNode.parent.children.id',
  childContentfulAuthorPersonalInfoTextNode___parent___children___children = 'childContentfulAuthorPersonalInfoTextNode.parent.children.children',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___content = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.content',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___contentDigest = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.contentDigest',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___description = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.description',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___fieldOwners = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.fieldOwners',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___ignoreType = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.ignoreType',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___mediaType = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.mediaType',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___owner = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.owner',
  childContentfulAuthorPersonalInfoTextNode___parent___internal___type = 'childContentfulAuthorPersonalInfoTextNode.parent.internal.type',
  childContentfulAuthorPersonalInfoTextNode___children = 'childContentfulAuthorPersonalInfoTextNode.children',
  childContentfulAuthorPersonalInfoTextNode___children___id = 'childContentfulAuthorPersonalInfoTextNode.children.id',
  childContentfulAuthorPersonalInfoTextNode___children___parent___id = 'childContentfulAuthorPersonalInfoTextNode.children.parent.id',
  childContentfulAuthorPersonalInfoTextNode___children___parent___children = 'childContentfulAuthorPersonalInfoTextNode.children.parent.children',
  childContentfulAuthorPersonalInfoTextNode___children___children = 'childContentfulAuthorPersonalInfoTextNode.children.children',
  childContentfulAuthorPersonalInfoTextNode___children___children___id = 'childContentfulAuthorPersonalInfoTextNode.children.children.id',
  childContentfulAuthorPersonalInfoTextNode___children___children___children = 'childContentfulAuthorPersonalInfoTextNode.children.children.children',
  childContentfulAuthorPersonalInfoTextNode___children___internal___content = 'childContentfulAuthorPersonalInfoTextNode.children.internal.content',
  childContentfulAuthorPersonalInfoTextNode___children___internal___contentDigest = 'childContentfulAuthorPersonalInfoTextNode.children.internal.contentDigest',
  childContentfulAuthorPersonalInfoTextNode___children___internal___description = 'childContentfulAuthorPersonalInfoTextNode.children.internal.description',
  childContentfulAuthorPersonalInfoTextNode___children___internal___fieldOwners = 'childContentfulAuthorPersonalInfoTextNode.children.internal.fieldOwners',
  childContentfulAuthorPersonalInfoTextNode___children___internal___ignoreType = 'childContentfulAuthorPersonalInfoTextNode.children.internal.ignoreType',
  childContentfulAuthorPersonalInfoTextNode___children___internal___mediaType = 'childContentfulAuthorPersonalInfoTextNode.children.internal.mediaType',
  childContentfulAuthorPersonalInfoTextNode___children___internal___owner = 'childContentfulAuthorPersonalInfoTextNode.children.internal.owner',
  childContentfulAuthorPersonalInfoTextNode___children___internal___type = 'childContentfulAuthorPersonalInfoTextNode.children.internal.type',
  childContentfulAuthorPersonalInfoTextNode___internal___content = 'childContentfulAuthorPersonalInfoTextNode.internal.content',
  childContentfulAuthorPersonalInfoTextNode___internal___contentDigest = 'childContentfulAuthorPersonalInfoTextNode.internal.contentDigest',
  childContentfulAuthorPersonalInfoTextNode___internal___description = 'childContentfulAuthorPersonalInfoTextNode.internal.description',
  childContentfulAuthorPersonalInfoTextNode___internal___fieldOwners = 'childContentfulAuthorPersonalInfoTextNode.internal.fieldOwners',
  childContentfulAuthorPersonalInfoTextNode___internal___ignoreType = 'childContentfulAuthorPersonalInfoTextNode.internal.ignoreType',
  childContentfulAuthorPersonalInfoTextNode___internal___mediaType = 'childContentfulAuthorPersonalInfoTextNode.internal.mediaType',
  childContentfulAuthorPersonalInfoTextNode___internal___owner = 'childContentfulAuthorPersonalInfoTextNode.internal.owner',
  childContentfulAuthorPersonalInfoTextNode___internal___type = 'childContentfulAuthorPersonalInfoTextNode.internal.type',
  childContentfulAuthorPersonalInfoTextNode___personal_info = 'childContentfulAuthorPersonalInfoTextNode.personal_info',
  childContentfulAuthorPersonalInfoTextNode___sys___type = 'childContentfulAuthorPersonalInfoTextNode.sys.type',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___id = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.id',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___excerpt = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.excerpt',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___html = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.html',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___htmlAst = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.htmlAst',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___excerptAst = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.excerptAst',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___headings = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.headings',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___headings___id = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.headings.id',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___headings___value = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.headings.value',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___headings___depth = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.headings.depth',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___timeToRead = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.timeToRead',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___tableOfContents = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.tableOfContents',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___wordCount___words = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.wordCount.words',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___parent___id = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.parent.id',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___parent___children = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.parent.children',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___children = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.children',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___children___id = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.children.id',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___children___children = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.children.children',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___content = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.content',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___description = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.description',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___owner = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.owner',
  childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___internal___type = 'childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.internal.type'
}

type ContentfulAuthorFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly subtitle: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly location: Maybe<StringQueryOperatorInput>;
  readonly avatar: Maybe<ContentfulAssetFilterInput>;
  readonly profileImage: Maybe<ContentfulAssetFilterInput>;
  readonly post: Maybe<ContentfulPostFilterListInput>;
  readonly personal_info: Maybe<contentfulAuthorPersonalInfoTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulAuthorSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childContentfulAuthorPersonalInfoTextNode: Maybe<contentfulAuthorPersonalInfoTextNodeFilterInput>;
};

type ContentfulAuthorFilterListInput = {
  readonly elemMatch: Maybe<ContentfulAuthorFilterInput>;
};

type ContentfulAuthorGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulAuthorEdge>;
  readonly nodes: ReadonlyArray<ContentfulAuthor>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulAuthorPersonalInfoTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly personal_info: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulAuthorPersonalInfoTextNodeSys>;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulAuthorPersonalInfoTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorPersonalInfoTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorPersonalInfoTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulAuthorPersonalInfoTextNodeGroupConnection>;
};


type contentfulAuthorPersonalInfoTextNodeConnection_distinctArgs = {
  field: contentfulAuthorPersonalInfoTextNodeFieldsEnum;
};


type contentfulAuthorPersonalInfoTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulAuthorPersonalInfoTextNodeFieldsEnum;
};

type contentfulAuthorPersonalInfoTextNodeEdge = {
  readonly next: Maybe<contentfulAuthorPersonalInfoTextNode>;
  readonly node: contentfulAuthorPersonalInfoTextNode;
  readonly previous: Maybe<contentfulAuthorPersonalInfoTextNode>;
};

enum contentfulAuthorPersonalInfoTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  personal_info = 'personal_info',
  sys___type = 'sys.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulAuthorPersonalInfoTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly personal_info: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulAuthorPersonalInfoTextNodeSysFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulAuthorPersonalInfoTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulAuthorPersonalInfoTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulAuthorPersonalInfoTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulAuthorPersonalInfoTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulAuthorPersonalInfoTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulAuthorPersonalInfoTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulAuthorPersonalInfoTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulAuthorFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulAuthorSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulAuthorSysContentType>;
};

type ContentfulAuthorSysContentType = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSys>;
};

type ContentfulAuthorSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

type ContentfulAuthorSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulAuthorSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulAuthorSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

type ContentfulContentType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly displayField: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly sys: Maybe<ContentfulContentTypeSys>;
};

type ContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulContentTypeGroupConnection>;
};


type ContentfulContentTypeConnection_distinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


type ContentfulContentTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

type ContentfulContentTypeEdge = {
  readonly next: Maybe<ContentfulContentType>;
  readonly node: ContentfulContentType;
  readonly previous: Maybe<ContentfulContentType>;
};

enum ContentfulContentTypeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  name = 'name',
  displayField = 'displayField',
  description = 'description',
  sys___type = 'sys.type'
}

type ContentfulContentTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly displayField: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<ContentfulContentTypeSysFilterInput>;
};

type ContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<ContentfulContentType>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulContentTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type ContentfulContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntry = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
};

type ContentfulEntryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulEntryGroupConnection>;
};


type ContentfulEntryConnection_distinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


type ContentfulEntryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

type ContentfulEntryEdge = {
  readonly next: Maybe<ContentfulEntry>;
  readonly node: ContentfulEntry;
  readonly previous: Maybe<ContentfulEntry>;
};

enum ContentfulEntryFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale'
}

type ContentfulEntryFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
};

type ContentfulEntryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulEntryEdge>;
  readonly nodes: ReadonlyArray<ContentfulEntry>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulEntrySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulEntryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

enum ContentfulImageCropFocus {
  TOP = 'top',
  TOP_LEFT = 'top_left',
  TOP_RIGHT = 'top_right',
  BOTTOM = 'bottom',
  BOTTOM_RIGHT = 'bottom_left',
  BOTTOM_LEFT = 'bottom_right',
  RIGHT = 'right',
  LEFT = 'left',
  FACE = 'face',
  FACES = 'faces',
  CENTER = 'center'
}

enum ContentfulImageFormat {
  NO_CHANGE = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ContentfulPost = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly title: Maybe<Scalars['String']>;
  readonly featured: Maybe<Scalars['Boolean']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly author: Maybe<ReadonlyArray<Maybe<ContentfulAuthor>>>;
  readonly hero: Maybe<ContentfulAsset>;
  readonly tags: Maybe<ReadonlyArray<Maybe<ContentfulTag>>>;
  readonly body: Maybe<contentfulPostBodyTextNode>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulPostSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
};


type ContentfulPost_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type contentfulPostBodyTextNode = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly body: Maybe<Scalars['String']>;
  readonly sys: Maybe<contentfulPostBodyTextNodeSys>;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};

type contentfulPostBodyTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<contentfulPostBodyTextNodeGroupConnection>;
};


type contentfulPostBodyTextNodeConnection_distinctArgs = {
  field: contentfulPostBodyTextNodeFieldsEnum;
};


type contentfulPostBodyTextNodeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: contentfulPostBodyTextNodeFieldsEnum;
};

type contentfulPostBodyTextNodeEdge = {
  readonly next: Maybe<contentfulPostBodyTextNode>;
  readonly node: contentfulPostBodyTextNode;
  readonly previous: Maybe<contentfulPostBodyTextNode>;
};

enum contentfulPostBodyTextNodeFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  body = 'body',
  sys___type = 'sys.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type contentfulPostBodyTextNodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly body: Maybe<StringQueryOperatorInput>;
  readonly sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type contentfulPostBodyTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<contentfulPostBodyTextNodeEdge>;
  readonly nodes: ReadonlyArray<contentfulPostBodyTextNode>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type contentfulPostBodyTextNodeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<contentfulPostBodyTextNodeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type contentfulPostBodyTextNodeSys = {
  readonly type: Maybe<Scalars['String']>;
};

type contentfulPostBodyTextNodeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulPostGroupConnection>;
};


type ContentfulPostConnection_distinctArgs = {
  field: ContentfulPostFieldsEnum;
};


type ContentfulPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

type ContentfulPostEdge = {
  readonly next: Maybe<ContentfulPost>;
  readonly node: ContentfulPost;
  readonly previous: Maybe<ContentfulPost>;
};

enum ContentfulPostFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  title = 'title',
  featured = 'featured',
  slug = 'slug',
  date = 'date',
  excerpt = 'excerpt',
  author = 'author',
  author___contentful_id = 'author.contentful_id',
  author___id = 'author.id',
  author___node_locale = 'author.node_locale',
  author___name = 'author.name',
  author___subtitle = 'author.subtitle',
  author___slug = 'author.slug',
  author___social = 'author.social',
  author___featured = 'author.featured',
  author___location = 'author.location',
  author___avatar___contentful_id = 'author.avatar.contentful_id',
  author___avatar___id = 'author.avatar.id',
  author___avatar___spaceId = 'author.avatar.spaceId',
  author___avatar___createdAt = 'author.avatar.createdAt',
  author___avatar___updatedAt = 'author.avatar.updatedAt',
  author___avatar___file___url = 'author.avatar.file.url',
  author___avatar___file___fileName = 'author.avatar.file.fileName',
  author___avatar___file___contentType = 'author.avatar.file.contentType',
  author___avatar___title = 'author.avatar.title',
  author___avatar___description = 'author.avatar.description',
  author___avatar___node_locale = 'author.avatar.node_locale',
  author___avatar___sys___type = 'author.avatar.sys.type',
  author___avatar___sys___revision = 'author.avatar.sys.revision',
  author___avatar___fixed___base64 = 'author.avatar.fixed.base64',
  author___avatar___fixed___tracedSVG = 'author.avatar.fixed.tracedSVG',
  author___avatar___fixed___aspectRatio = 'author.avatar.fixed.aspectRatio',
  author___avatar___fixed___width = 'author.avatar.fixed.width',
  author___avatar___fixed___height = 'author.avatar.fixed.height',
  author___avatar___fixed___src = 'author.avatar.fixed.src',
  author___avatar___fixed___srcSet = 'author.avatar.fixed.srcSet',
  author___avatar___fixed___srcWebp = 'author.avatar.fixed.srcWebp',
  author___avatar___fixed___srcSetWebp = 'author.avatar.fixed.srcSetWebp',
  author___avatar___resolutions___base64 = 'author.avatar.resolutions.base64',
  author___avatar___resolutions___tracedSVG = 'author.avatar.resolutions.tracedSVG',
  author___avatar___resolutions___aspectRatio = 'author.avatar.resolutions.aspectRatio',
  author___avatar___resolutions___width = 'author.avatar.resolutions.width',
  author___avatar___resolutions___height = 'author.avatar.resolutions.height',
  author___avatar___resolutions___src = 'author.avatar.resolutions.src',
  author___avatar___resolutions___srcSet = 'author.avatar.resolutions.srcSet',
  author___avatar___resolutions___srcWebp = 'author.avatar.resolutions.srcWebp',
  author___avatar___resolutions___srcSetWebp = 'author.avatar.resolutions.srcSetWebp',
  author___avatar___fluid___base64 = 'author.avatar.fluid.base64',
  author___avatar___fluid___tracedSVG = 'author.avatar.fluid.tracedSVG',
  author___avatar___fluid___aspectRatio = 'author.avatar.fluid.aspectRatio',
  author___avatar___fluid___src = 'author.avatar.fluid.src',
  author___avatar___fluid___srcSet = 'author.avatar.fluid.srcSet',
  author___avatar___fluid___srcWebp = 'author.avatar.fluid.srcWebp',
  author___avatar___fluid___srcSetWebp = 'author.avatar.fluid.srcSetWebp',
  author___avatar___fluid___sizes = 'author.avatar.fluid.sizes',
  author___avatar___sizes___base64 = 'author.avatar.sizes.base64',
  author___avatar___sizes___tracedSVG = 'author.avatar.sizes.tracedSVG',
  author___avatar___sizes___aspectRatio = 'author.avatar.sizes.aspectRatio',
  author___avatar___sizes___src = 'author.avatar.sizes.src',
  author___avatar___sizes___srcSet = 'author.avatar.sizes.srcSet',
  author___avatar___sizes___srcWebp = 'author.avatar.sizes.srcWebp',
  author___avatar___sizes___srcSetWebp = 'author.avatar.sizes.srcSetWebp',
  author___avatar___sizes___sizes = 'author.avatar.sizes.sizes',
  author___avatar___resize___base64 = 'author.avatar.resize.base64',
  author___avatar___resize___tracedSVG = 'author.avatar.resize.tracedSVG',
  author___avatar___resize___src = 'author.avatar.resize.src',
  author___avatar___resize___width = 'author.avatar.resize.width',
  author___avatar___resize___height = 'author.avatar.resize.height',
  author___avatar___resize___aspectRatio = 'author.avatar.resize.aspectRatio',
  author___avatar___parent___id = 'author.avatar.parent.id',
  author___avatar___parent___children = 'author.avatar.parent.children',
  author___avatar___children = 'author.avatar.children',
  author___avatar___children___id = 'author.avatar.children.id',
  author___avatar___children___children = 'author.avatar.children.children',
  author___avatar___internal___content = 'author.avatar.internal.content',
  author___avatar___internal___contentDigest = 'author.avatar.internal.contentDigest',
  author___avatar___internal___description = 'author.avatar.internal.description',
  author___avatar___internal___fieldOwners = 'author.avatar.internal.fieldOwners',
  author___avatar___internal___ignoreType = 'author.avatar.internal.ignoreType',
  author___avatar___internal___mediaType = 'author.avatar.internal.mediaType',
  author___avatar___internal___owner = 'author.avatar.internal.owner',
  author___avatar___internal___type = 'author.avatar.internal.type',
  author___profileImage___contentful_id = 'author.profileImage.contentful_id',
  author___profileImage___id = 'author.profileImage.id',
  author___profileImage___spaceId = 'author.profileImage.spaceId',
  author___profileImage___createdAt = 'author.profileImage.createdAt',
  author___profileImage___updatedAt = 'author.profileImage.updatedAt',
  author___profileImage___file___url = 'author.profileImage.file.url',
  author___profileImage___file___fileName = 'author.profileImage.file.fileName',
  author___profileImage___file___contentType = 'author.profileImage.file.contentType',
  author___profileImage___title = 'author.profileImage.title',
  author___profileImage___description = 'author.profileImage.description',
  author___profileImage___node_locale = 'author.profileImage.node_locale',
  author___profileImage___sys___type = 'author.profileImage.sys.type',
  author___profileImage___sys___revision = 'author.profileImage.sys.revision',
  author___profileImage___fixed___base64 = 'author.profileImage.fixed.base64',
  author___profileImage___fixed___tracedSVG = 'author.profileImage.fixed.tracedSVG',
  author___profileImage___fixed___aspectRatio = 'author.profileImage.fixed.aspectRatio',
  author___profileImage___fixed___width = 'author.profileImage.fixed.width',
  author___profileImage___fixed___height = 'author.profileImage.fixed.height',
  author___profileImage___fixed___src = 'author.profileImage.fixed.src',
  author___profileImage___fixed___srcSet = 'author.profileImage.fixed.srcSet',
  author___profileImage___fixed___srcWebp = 'author.profileImage.fixed.srcWebp',
  author___profileImage___fixed___srcSetWebp = 'author.profileImage.fixed.srcSetWebp',
  author___profileImage___resolutions___base64 = 'author.profileImage.resolutions.base64',
  author___profileImage___resolutions___tracedSVG = 'author.profileImage.resolutions.tracedSVG',
  author___profileImage___resolutions___aspectRatio = 'author.profileImage.resolutions.aspectRatio',
  author___profileImage___resolutions___width = 'author.profileImage.resolutions.width',
  author___profileImage___resolutions___height = 'author.profileImage.resolutions.height',
  author___profileImage___resolutions___src = 'author.profileImage.resolutions.src',
  author___profileImage___resolutions___srcSet = 'author.profileImage.resolutions.srcSet',
  author___profileImage___resolutions___srcWebp = 'author.profileImage.resolutions.srcWebp',
  author___profileImage___resolutions___srcSetWebp = 'author.profileImage.resolutions.srcSetWebp',
  author___profileImage___fluid___base64 = 'author.profileImage.fluid.base64',
  author___profileImage___fluid___tracedSVG = 'author.profileImage.fluid.tracedSVG',
  author___profileImage___fluid___aspectRatio = 'author.profileImage.fluid.aspectRatio',
  author___profileImage___fluid___src = 'author.profileImage.fluid.src',
  author___profileImage___fluid___srcSet = 'author.profileImage.fluid.srcSet',
  author___profileImage___fluid___srcWebp = 'author.profileImage.fluid.srcWebp',
  author___profileImage___fluid___srcSetWebp = 'author.profileImage.fluid.srcSetWebp',
  author___profileImage___fluid___sizes = 'author.profileImage.fluid.sizes',
  author___profileImage___sizes___base64 = 'author.profileImage.sizes.base64',
  author___profileImage___sizes___tracedSVG = 'author.profileImage.sizes.tracedSVG',
  author___profileImage___sizes___aspectRatio = 'author.profileImage.sizes.aspectRatio',
  author___profileImage___sizes___src = 'author.profileImage.sizes.src',
  author___profileImage___sizes___srcSet = 'author.profileImage.sizes.srcSet',
  author___profileImage___sizes___srcWebp = 'author.profileImage.sizes.srcWebp',
  author___profileImage___sizes___srcSetWebp = 'author.profileImage.sizes.srcSetWebp',
  author___profileImage___sizes___sizes = 'author.profileImage.sizes.sizes',
  author___profileImage___resize___base64 = 'author.profileImage.resize.base64',
  author___profileImage___resize___tracedSVG = 'author.profileImage.resize.tracedSVG',
  author___profileImage___resize___src = 'author.profileImage.resize.src',
  author___profileImage___resize___width = 'author.profileImage.resize.width',
  author___profileImage___resize___height = 'author.profileImage.resize.height',
  author___profileImage___resize___aspectRatio = 'author.profileImage.resize.aspectRatio',
  author___profileImage___parent___id = 'author.profileImage.parent.id',
  author___profileImage___parent___children = 'author.profileImage.parent.children',
  author___profileImage___children = 'author.profileImage.children',
  author___profileImage___children___id = 'author.profileImage.children.id',
  author___profileImage___children___children = 'author.profileImage.children.children',
  author___profileImage___internal___content = 'author.profileImage.internal.content',
  author___profileImage___internal___contentDigest = 'author.profileImage.internal.contentDigest',
  author___profileImage___internal___description = 'author.profileImage.internal.description',
  author___profileImage___internal___fieldOwners = 'author.profileImage.internal.fieldOwners',
  author___profileImage___internal___ignoreType = 'author.profileImage.internal.ignoreType',
  author___profileImage___internal___mediaType = 'author.profileImage.internal.mediaType',
  author___profileImage___internal___owner = 'author.profileImage.internal.owner',
  author___profileImage___internal___type = 'author.profileImage.internal.type',
  author___post = 'author.post',
  author___post___contentful_id = 'author.post.contentful_id',
  author___post___id = 'author.post.id',
  author___post___node_locale = 'author.post.node_locale',
  author___post___title = 'author.post.title',
  author___post___featured = 'author.post.featured',
  author___post___slug = 'author.post.slug',
  author___post___date = 'author.post.date',
  author___post___excerpt = 'author.post.excerpt',
  author___post___author = 'author.post.author',
  author___post___author___contentful_id = 'author.post.author.contentful_id',
  author___post___author___id = 'author.post.author.id',
  author___post___author___node_locale = 'author.post.author.node_locale',
  author___post___author___name = 'author.post.author.name',
  author___post___author___subtitle = 'author.post.author.subtitle',
  author___post___author___slug = 'author.post.author.slug',
  author___post___author___social = 'author.post.author.social',
  author___post___author___featured = 'author.post.author.featured',
  author___post___author___location = 'author.post.author.location',
  author___post___author___post = 'author.post.author.post',
  author___post___author___spaceId = 'author.post.author.spaceId',
  author___post___author___createdAt = 'author.post.author.createdAt',
  author___post___author___updatedAt = 'author.post.author.updatedAt',
  author___post___author___children = 'author.post.author.children',
  author___post___hero___contentful_id = 'author.post.hero.contentful_id',
  author___post___hero___id = 'author.post.hero.id',
  author___post___hero___spaceId = 'author.post.hero.spaceId',
  author___post___hero___createdAt = 'author.post.hero.createdAt',
  author___post___hero___updatedAt = 'author.post.hero.updatedAt',
  author___post___hero___title = 'author.post.hero.title',
  author___post___hero___description = 'author.post.hero.description',
  author___post___hero___node_locale = 'author.post.hero.node_locale',
  author___post___hero___children = 'author.post.hero.children',
  author___post___tags = 'author.post.tags',
  author___post___tags___contentful_id = 'author.post.tags.contentful_id',
  author___post___tags___id = 'author.post.tags.id',
  author___post___tags___node_locale = 'author.post.tags.node_locale',
  author___post___tags___tagName = 'author.post.tags.tagName',
  author___post___tags___slug = 'author.post.tags.slug',
  author___post___tags___post = 'author.post.tags.post',
  author___post___tags___spaceId = 'author.post.tags.spaceId',
  author___post___tags___createdAt = 'author.post.tags.createdAt',
  author___post___tags___updatedAt = 'author.post.tags.updatedAt',
  author___post___tags___children = 'author.post.tags.children',
  author___post___body___id = 'author.post.body.id',
  author___post___body___children = 'author.post.body.children',
  author___post___body___body = 'author.post.body.body',
  author___post___spaceId = 'author.post.spaceId',
  author___post___createdAt = 'author.post.createdAt',
  author___post___updatedAt = 'author.post.updatedAt',
  author___post___sys___type = 'author.post.sys.type',
  author___post___sys___revision = 'author.post.sys.revision',
  author___post___parent___id = 'author.post.parent.id',
  author___post___parent___children = 'author.post.parent.children',
  author___post___children = 'author.post.children',
  author___post___children___id = 'author.post.children.id',
  author___post___children___children = 'author.post.children.children',
  author___post___internal___content = 'author.post.internal.content',
  author___post___internal___contentDigest = 'author.post.internal.contentDigest',
  author___post___internal___description = 'author.post.internal.description',
  author___post___internal___fieldOwners = 'author.post.internal.fieldOwners',
  author___post___internal___ignoreType = 'author.post.internal.ignoreType',
  author___post___internal___mediaType = 'author.post.internal.mediaType',
  author___post___internal___owner = 'author.post.internal.owner',
  author___post___internal___type = 'author.post.internal.type',
  author___post___childContentfulPostBodyTextNode___id = 'author.post.childContentfulPostBodyTextNode.id',
  author___post___childContentfulPostBodyTextNode___children = 'author.post.childContentfulPostBodyTextNode.children',
  author___post___childContentfulPostBodyTextNode___body = 'author.post.childContentfulPostBodyTextNode.body',
  author___personal_info___id = 'author.personal_info.id',
  author___personal_info___parent___id = 'author.personal_info.parent.id',
  author___personal_info___parent___children = 'author.personal_info.parent.children',
  author___personal_info___children = 'author.personal_info.children',
  author___personal_info___children___id = 'author.personal_info.children.id',
  author___personal_info___children___children = 'author.personal_info.children.children',
  author___personal_info___internal___content = 'author.personal_info.internal.content',
  author___personal_info___internal___contentDigest = 'author.personal_info.internal.contentDigest',
  author___personal_info___internal___description = 'author.personal_info.internal.description',
  author___personal_info___internal___fieldOwners = 'author.personal_info.internal.fieldOwners',
  author___personal_info___internal___ignoreType = 'author.personal_info.internal.ignoreType',
  author___personal_info___internal___mediaType = 'author.personal_info.internal.mediaType',
  author___personal_info___internal___owner = 'author.personal_info.internal.owner',
  author___personal_info___internal___type = 'author.personal_info.internal.type',
  author___personal_info___personal_info = 'author.personal_info.personal_info',
  author___personal_info___sys___type = 'author.personal_info.sys.type',
  author___personal_info___childMarkdownRemark___id = 'author.personal_info.childMarkdownRemark.id',
  author___personal_info___childMarkdownRemark___excerpt = 'author.personal_info.childMarkdownRemark.excerpt',
  author___personal_info___childMarkdownRemark___rawMarkdownBody = 'author.personal_info.childMarkdownRemark.rawMarkdownBody',
  author___personal_info___childMarkdownRemark___html = 'author.personal_info.childMarkdownRemark.html',
  author___personal_info___childMarkdownRemark___htmlAst = 'author.personal_info.childMarkdownRemark.htmlAst',
  author___personal_info___childMarkdownRemark___excerptAst = 'author.personal_info.childMarkdownRemark.excerptAst',
  author___personal_info___childMarkdownRemark___headings = 'author.personal_info.childMarkdownRemark.headings',
  author___personal_info___childMarkdownRemark___timeToRead = 'author.personal_info.childMarkdownRemark.timeToRead',
  author___personal_info___childMarkdownRemark___tableOfContents = 'author.personal_info.childMarkdownRemark.tableOfContents',
  author___personal_info___childMarkdownRemark___children = 'author.personal_info.childMarkdownRemark.children',
  author___spaceId = 'author.spaceId',
  author___createdAt = 'author.createdAt',
  author___updatedAt = 'author.updatedAt',
  author___sys___type = 'author.sys.type',
  author___sys___revision = 'author.sys.revision',
  author___parent___id = 'author.parent.id',
  author___parent___parent___id = 'author.parent.parent.id',
  author___parent___parent___children = 'author.parent.parent.children',
  author___parent___children = 'author.parent.children',
  author___parent___children___id = 'author.parent.children.id',
  author___parent___children___children = 'author.parent.children.children',
  author___parent___internal___content = 'author.parent.internal.content',
  author___parent___internal___contentDigest = 'author.parent.internal.contentDigest',
  author___parent___internal___description = 'author.parent.internal.description',
  author___parent___internal___fieldOwners = 'author.parent.internal.fieldOwners',
  author___parent___internal___ignoreType = 'author.parent.internal.ignoreType',
  author___parent___internal___mediaType = 'author.parent.internal.mediaType',
  author___parent___internal___owner = 'author.parent.internal.owner',
  author___parent___internal___type = 'author.parent.internal.type',
  author___children = 'author.children',
  author___children___id = 'author.children.id',
  author___children___parent___id = 'author.children.parent.id',
  author___children___parent___children = 'author.children.parent.children',
  author___children___children = 'author.children.children',
  author___children___children___id = 'author.children.children.id',
  author___children___children___children = 'author.children.children.children',
  author___children___internal___content = 'author.children.internal.content',
  author___children___internal___contentDigest = 'author.children.internal.contentDigest',
  author___children___internal___description = 'author.children.internal.description',
  author___children___internal___fieldOwners = 'author.children.internal.fieldOwners',
  author___children___internal___ignoreType = 'author.children.internal.ignoreType',
  author___children___internal___mediaType = 'author.children.internal.mediaType',
  author___children___internal___owner = 'author.children.internal.owner',
  author___children___internal___type = 'author.children.internal.type',
  author___internal___content = 'author.internal.content',
  author___internal___contentDigest = 'author.internal.contentDigest',
  author___internal___description = 'author.internal.description',
  author___internal___fieldOwners = 'author.internal.fieldOwners',
  author___internal___ignoreType = 'author.internal.ignoreType',
  author___internal___mediaType = 'author.internal.mediaType',
  author___internal___owner = 'author.internal.owner',
  author___internal___type = 'author.internal.type',
  author___childContentfulAuthorPersonalInfoTextNode___id = 'author.childContentfulAuthorPersonalInfoTextNode.id',
  author___childContentfulAuthorPersonalInfoTextNode___parent___id = 'author.childContentfulAuthorPersonalInfoTextNode.parent.id',
  author___childContentfulAuthorPersonalInfoTextNode___parent___children = 'author.childContentfulAuthorPersonalInfoTextNode.parent.children',
  author___childContentfulAuthorPersonalInfoTextNode___children = 'author.childContentfulAuthorPersonalInfoTextNode.children',
  author___childContentfulAuthorPersonalInfoTextNode___children___id = 'author.childContentfulAuthorPersonalInfoTextNode.children.id',
  author___childContentfulAuthorPersonalInfoTextNode___children___children = 'author.childContentfulAuthorPersonalInfoTextNode.children.children',
  author___childContentfulAuthorPersonalInfoTextNode___internal___content = 'author.childContentfulAuthorPersonalInfoTextNode.internal.content',
  author___childContentfulAuthorPersonalInfoTextNode___internal___contentDigest = 'author.childContentfulAuthorPersonalInfoTextNode.internal.contentDigest',
  author___childContentfulAuthorPersonalInfoTextNode___internal___description = 'author.childContentfulAuthorPersonalInfoTextNode.internal.description',
  author___childContentfulAuthorPersonalInfoTextNode___internal___fieldOwners = 'author.childContentfulAuthorPersonalInfoTextNode.internal.fieldOwners',
  author___childContentfulAuthorPersonalInfoTextNode___internal___ignoreType = 'author.childContentfulAuthorPersonalInfoTextNode.internal.ignoreType',
  author___childContentfulAuthorPersonalInfoTextNode___internal___mediaType = 'author.childContentfulAuthorPersonalInfoTextNode.internal.mediaType',
  author___childContentfulAuthorPersonalInfoTextNode___internal___owner = 'author.childContentfulAuthorPersonalInfoTextNode.internal.owner',
  author___childContentfulAuthorPersonalInfoTextNode___internal___type = 'author.childContentfulAuthorPersonalInfoTextNode.internal.type',
  author___childContentfulAuthorPersonalInfoTextNode___personal_info = 'author.childContentfulAuthorPersonalInfoTextNode.personal_info',
  author___childContentfulAuthorPersonalInfoTextNode___sys___type = 'author.childContentfulAuthorPersonalInfoTextNode.sys.type',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___id = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.id',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___excerpt = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.excerpt',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___rawMarkdownBody = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.rawMarkdownBody',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___html = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.html',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___htmlAst = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.htmlAst',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___excerptAst = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.excerptAst',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___headings = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.headings',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___timeToRead = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.timeToRead',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___tableOfContents = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.tableOfContents',
  author___childContentfulAuthorPersonalInfoTextNode___childMarkdownRemark___children = 'author.childContentfulAuthorPersonalInfoTextNode.childMarkdownRemark.children',
  hero___contentful_id = 'hero.contentful_id',
  hero___id = 'hero.id',
  hero___spaceId = 'hero.spaceId',
  hero___createdAt = 'hero.createdAt',
  hero___updatedAt = 'hero.updatedAt',
  hero___file___url = 'hero.file.url',
  hero___file___details___size = 'hero.file.details.size',
  hero___file___fileName = 'hero.file.fileName',
  hero___file___contentType = 'hero.file.contentType',
  hero___title = 'hero.title',
  hero___description = 'hero.description',
  hero___node_locale = 'hero.node_locale',
  hero___sys___type = 'hero.sys.type',
  hero___sys___revision = 'hero.sys.revision',
  hero___fixed___base64 = 'hero.fixed.base64',
  hero___fixed___tracedSVG = 'hero.fixed.tracedSVG',
  hero___fixed___aspectRatio = 'hero.fixed.aspectRatio',
  hero___fixed___width = 'hero.fixed.width',
  hero___fixed___height = 'hero.fixed.height',
  hero___fixed___src = 'hero.fixed.src',
  hero___fixed___srcSet = 'hero.fixed.srcSet',
  hero___fixed___srcWebp = 'hero.fixed.srcWebp',
  hero___fixed___srcSetWebp = 'hero.fixed.srcSetWebp',
  hero___resolutions___base64 = 'hero.resolutions.base64',
  hero___resolutions___tracedSVG = 'hero.resolutions.tracedSVG',
  hero___resolutions___aspectRatio = 'hero.resolutions.aspectRatio',
  hero___resolutions___width = 'hero.resolutions.width',
  hero___resolutions___height = 'hero.resolutions.height',
  hero___resolutions___src = 'hero.resolutions.src',
  hero___resolutions___srcSet = 'hero.resolutions.srcSet',
  hero___resolutions___srcWebp = 'hero.resolutions.srcWebp',
  hero___resolutions___srcSetWebp = 'hero.resolutions.srcSetWebp',
  hero___fluid___base64 = 'hero.fluid.base64',
  hero___fluid___tracedSVG = 'hero.fluid.tracedSVG',
  hero___fluid___aspectRatio = 'hero.fluid.aspectRatio',
  hero___fluid___src = 'hero.fluid.src',
  hero___fluid___srcSet = 'hero.fluid.srcSet',
  hero___fluid___srcWebp = 'hero.fluid.srcWebp',
  hero___fluid___srcSetWebp = 'hero.fluid.srcSetWebp',
  hero___fluid___sizes = 'hero.fluid.sizes',
  hero___sizes___base64 = 'hero.sizes.base64',
  hero___sizes___tracedSVG = 'hero.sizes.tracedSVG',
  hero___sizes___aspectRatio = 'hero.sizes.aspectRatio',
  hero___sizes___src = 'hero.sizes.src',
  hero___sizes___srcSet = 'hero.sizes.srcSet',
  hero___sizes___srcWebp = 'hero.sizes.srcWebp',
  hero___sizes___srcSetWebp = 'hero.sizes.srcSetWebp',
  hero___sizes___sizes = 'hero.sizes.sizes',
  hero___resize___base64 = 'hero.resize.base64',
  hero___resize___tracedSVG = 'hero.resize.tracedSVG',
  hero___resize___src = 'hero.resize.src',
  hero___resize___width = 'hero.resize.width',
  hero___resize___height = 'hero.resize.height',
  hero___resize___aspectRatio = 'hero.resize.aspectRatio',
  hero___parent___id = 'hero.parent.id',
  hero___parent___parent___id = 'hero.parent.parent.id',
  hero___parent___parent___children = 'hero.parent.parent.children',
  hero___parent___children = 'hero.parent.children',
  hero___parent___children___id = 'hero.parent.children.id',
  hero___parent___children___children = 'hero.parent.children.children',
  hero___parent___internal___content = 'hero.parent.internal.content',
  hero___parent___internal___contentDigest = 'hero.parent.internal.contentDigest',
  hero___parent___internal___description = 'hero.parent.internal.description',
  hero___parent___internal___fieldOwners = 'hero.parent.internal.fieldOwners',
  hero___parent___internal___ignoreType = 'hero.parent.internal.ignoreType',
  hero___parent___internal___mediaType = 'hero.parent.internal.mediaType',
  hero___parent___internal___owner = 'hero.parent.internal.owner',
  hero___parent___internal___type = 'hero.parent.internal.type',
  hero___children = 'hero.children',
  hero___children___id = 'hero.children.id',
  hero___children___parent___id = 'hero.children.parent.id',
  hero___children___parent___children = 'hero.children.parent.children',
  hero___children___children = 'hero.children.children',
  hero___children___children___id = 'hero.children.children.id',
  hero___children___children___children = 'hero.children.children.children',
  hero___children___internal___content = 'hero.children.internal.content',
  hero___children___internal___contentDigest = 'hero.children.internal.contentDigest',
  hero___children___internal___description = 'hero.children.internal.description',
  hero___children___internal___fieldOwners = 'hero.children.internal.fieldOwners',
  hero___children___internal___ignoreType = 'hero.children.internal.ignoreType',
  hero___children___internal___mediaType = 'hero.children.internal.mediaType',
  hero___children___internal___owner = 'hero.children.internal.owner',
  hero___children___internal___type = 'hero.children.internal.type',
  hero___internal___content = 'hero.internal.content',
  hero___internal___contentDigest = 'hero.internal.contentDigest',
  hero___internal___description = 'hero.internal.description',
  hero___internal___fieldOwners = 'hero.internal.fieldOwners',
  hero___internal___ignoreType = 'hero.internal.ignoreType',
  hero___internal___mediaType = 'hero.internal.mediaType',
  hero___internal___owner = 'hero.internal.owner',
  hero___internal___type = 'hero.internal.type',
  tags = 'tags',
  tags___contentful_id = 'tags.contentful_id',
  tags___id = 'tags.id',
  tags___node_locale = 'tags.node_locale',
  tags___tagName = 'tags.tagName',
  tags___slug = 'tags.slug',
  tags___description___raw = 'tags.description.raw',
  tags___image___contentful_id = 'tags.image.contentful_id',
  tags___image___id = 'tags.image.id',
  tags___image___spaceId = 'tags.image.spaceId',
  tags___image___createdAt = 'tags.image.createdAt',
  tags___image___updatedAt = 'tags.image.updatedAt',
  tags___image___file___url = 'tags.image.file.url',
  tags___image___file___fileName = 'tags.image.file.fileName',
  tags___image___file___contentType = 'tags.image.file.contentType',
  tags___image___title = 'tags.image.title',
  tags___image___description = 'tags.image.description',
  tags___image___node_locale = 'tags.image.node_locale',
  tags___image___sys___type = 'tags.image.sys.type',
  tags___image___sys___revision = 'tags.image.sys.revision',
  tags___image___fixed___base64 = 'tags.image.fixed.base64',
  tags___image___fixed___tracedSVG = 'tags.image.fixed.tracedSVG',
  tags___image___fixed___aspectRatio = 'tags.image.fixed.aspectRatio',
  tags___image___fixed___width = 'tags.image.fixed.width',
  tags___image___fixed___height = 'tags.image.fixed.height',
  tags___image___fixed___src = 'tags.image.fixed.src',
  tags___image___fixed___srcSet = 'tags.image.fixed.srcSet',
  tags___image___fixed___srcWebp = 'tags.image.fixed.srcWebp',
  tags___image___fixed___srcSetWebp = 'tags.image.fixed.srcSetWebp',
  tags___image___resolutions___base64 = 'tags.image.resolutions.base64',
  tags___image___resolutions___tracedSVG = 'tags.image.resolutions.tracedSVG',
  tags___image___resolutions___aspectRatio = 'tags.image.resolutions.aspectRatio',
  tags___image___resolutions___width = 'tags.image.resolutions.width',
  tags___image___resolutions___height = 'tags.image.resolutions.height',
  tags___image___resolutions___src = 'tags.image.resolutions.src',
  tags___image___resolutions___srcSet = 'tags.image.resolutions.srcSet',
  tags___image___resolutions___srcWebp = 'tags.image.resolutions.srcWebp',
  tags___image___resolutions___srcSetWebp = 'tags.image.resolutions.srcSetWebp',
  tags___image___fluid___base64 = 'tags.image.fluid.base64',
  tags___image___fluid___tracedSVG = 'tags.image.fluid.tracedSVG',
  tags___image___fluid___aspectRatio = 'tags.image.fluid.aspectRatio',
  tags___image___fluid___src = 'tags.image.fluid.src',
  tags___image___fluid___srcSet = 'tags.image.fluid.srcSet',
  tags___image___fluid___srcWebp = 'tags.image.fluid.srcWebp',
  tags___image___fluid___srcSetWebp = 'tags.image.fluid.srcSetWebp',
  tags___image___fluid___sizes = 'tags.image.fluid.sizes',
  tags___image___sizes___base64 = 'tags.image.sizes.base64',
  tags___image___sizes___tracedSVG = 'tags.image.sizes.tracedSVG',
  tags___image___sizes___aspectRatio = 'tags.image.sizes.aspectRatio',
  tags___image___sizes___src = 'tags.image.sizes.src',
  tags___image___sizes___srcSet = 'tags.image.sizes.srcSet',
  tags___image___sizes___srcWebp = 'tags.image.sizes.srcWebp',
  tags___image___sizes___srcSetWebp = 'tags.image.sizes.srcSetWebp',
  tags___image___sizes___sizes = 'tags.image.sizes.sizes',
  tags___image___resize___base64 = 'tags.image.resize.base64',
  tags___image___resize___tracedSVG = 'tags.image.resize.tracedSVG',
  tags___image___resize___src = 'tags.image.resize.src',
  tags___image___resize___width = 'tags.image.resize.width',
  tags___image___resize___height = 'tags.image.resize.height',
  tags___image___resize___aspectRatio = 'tags.image.resize.aspectRatio',
  tags___image___parent___id = 'tags.image.parent.id',
  tags___image___parent___children = 'tags.image.parent.children',
  tags___image___children = 'tags.image.children',
  tags___image___children___id = 'tags.image.children.id',
  tags___image___children___children = 'tags.image.children.children',
  tags___image___internal___content = 'tags.image.internal.content',
  tags___image___internal___contentDigest = 'tags.image.internal.contentDigest',
  tags___image___internal___description = 'tags.image.internal.description',
  tags___image___internal___fieldOwners = 'tags.image.internal.fieldOwners',
  tags___image___internal___ignoreType = 'tags.image.internal.ignoreType',
  tags___image___internal___mediaType = 'tags.image.internal.mediaType',
  tags___image___internal___owner = 'tags.image.internal.owner',
  tags___image___internal___type = 'tags.image.internal.type',
  tags___post = 'tags.post',
  tags___post___contentful_id = 'tags.post.contentful_id',
  tags___post___id = 'tags.post.id',
  tags___post___node_locale = 'tags.post.node_locale',
  tags___post___title = 'tags.post.title',
  tags___post___featured = 'tags.post.featured',
  tags___post___slug = 'tags.post.slug',
  tags___post___date = 'tags.post.date',
  tags___post___excerpt = 'tags.post.excerpt',
  tags___post___author = 'tags.post.author',
  tags___post___author___contentful_id = 'tags.post.author.contentful_id',
  tags___post___author___id = 'tags.post.author.id',
  tags___post___author___node_locale = 'tags.post.author.node_locale',
  tags___post___author___name = 'tags.post.author.name',
  tags___post___author___subtitle = 'tags.post.author.subtitle',
  tags___post___author___slug = 'tags.post.author.slug',
  tags___post___author___social = 'tags.post.author.social',
  tags___post___author___featured = 'tags.post.author.featured',
  tags___post___author___location = 'tags.post.author.location',
  tags___post___author___post = 'tags.post.author.post',
  tags___post___author___spaceId = 'tags.post.author.spaceId',
  tags___post___author___createdAt = 'tags.post.author.createdAt',
  tags___post___author___updatedAt = 'tags.post.author.updatedAt',
  tags___post___author___children = 'tags.post.author.children',
  tags___post___hero___contentful_id = 'tags.post.hero.contentful_id',
  tags___post___hero___id = 'tags.post.hero.id',
  tags___post___hero___spaceId = 'tags.post.hero.spaceId',
  tags___post___hero___createdAt = 'tags.post.hero.createdAt',
  tags___post___hero___updatedAt = 'tags.post.hero.updatedAt',
  tags___post___hero___title = 'tags.post.hero.title',
  tags___post___hero___description = 'tags.post.hero.description',
  tags___post___hero___node_locale = 'tags.post.hero.node_locale',
  tags___post___hero___children = 'tags.post.hero.children',
  tags___post___tags = 'tags.post.tags',
  tags___post___tags___contentful_id = 'tags.post.tags.contentful_id',
  tags___post___tags___id = 'tags.post.tags.id',
  tags___post___tags___node_locale = 'tags.post.tags.node_locale',
  tags___post___tags___tagName = 'tags.post.tags.tagName',
  tags___post___tags___slug = 'tags.post.tags.slug',
  tags___post___tags___post = 'tags.post.tags.post',
  tags___post___tags___spaceId = 'tags.post.tags.spaceId',
  tags___post___tags___createdAt = 'tags.post.tags.createdAt',
  tags___post___tags___updatedAt = 'tags.post.tags.updatedAt',
  tags___post___tags___children = 'tags.post.tags.children',
  tags___post___body___id = 'tags.post.body.id',
  tags___post___body___children = 'tags.post.body.children',
  tags___post___body___body = 'tags.post.body.body',
  tags___post___spaceId = 'tags.post.spaceId',
  tags___post___createdAt = 'tags.post.createdAt',
  tags___post___updatedAt = 'tags.post.updatedAt',
  tags___post___sys___type = 'tags.post.sys.type',
  tags___post___sys___revision = 'tags.post.sys.revision',
  tags___post___parent___id = 'tags.post.parent.id',
  tags___post___parent___children = 'tags.post.parent.children',
  tags___post___children = 'tags.post.children',
  tags___post___children___id = 'tags.post.children.id',
  tags___post___children___children = 'tags.post.children.children',
  tags___post___internal___content = 'tags.post.internal.content',
  tags___post___internal___contentDigest = 'tags.post.internal.contentDigest',
  tags___post___internal___description = 'tags.post.internal.description',
  tags___post___internal___fieldOwners = 'tags.post.internal.fieldOwners',
  tags___post___internal___ignoreType = 'tags.post.internal.ignoreType',
  tags___post___internal___mediaType = 'tags.post.internal.mediaType',
  tags___post___internal___owner = 'tags.post.internal.owner',
  tags___post___internal___type = 'tags.post.internal.type',
  tags___post___childContentfulPostBodyTextNode___id = 'tags.post.childContentfulPostBodyTextNode.id',
  tags___post___childContentfulPostBodyTextNode___children = 'tags.post.childContentfulPostBodyTextNode.children',
  tags___post___childContentfulPostBodyTextNode___body = 'tags.post.childContentfulPostBodyTextNode.body',
  tags___spaceId = 'tags.spaceId',
  tags___createdAt = 'tags.createdAt',
  tags___updatedAt = 'tags.updatedAt',
  tags___sys___type = 'tags.sys.type',
  tags___sys___revision = 'tags.sys.revision',
  tags___parent___id = 'tags.parent.id',
  tags___parent___parent___id = 'tags.parent.parent.id',
  tags___parent___parent___children = 'tags.parent.parent.children',
  tags___parent___children = 'tags.parent.children',
  tags___parent___children___id = 'tags.parent.children.id',
  tags___parent___children___children = 'tags.parent.children.children',
  tags___parent___internal___content = 'tags.parent.internal.content',
  tags___parent___internal___contentDigest = 'tags.parent.internal.contentDigest',
  tags___parent___internal___description = 'tags.parent.internal.description',
  tags___parent___internal___fieldOwners = 'tags.parent.internal.fieldOwners',
  tags___parent___internal___ignoreType = 'tags.parent.internal.ignoreType',
  tags___parent___internal___mediaType = 'tags.parent.internal.mediaType',
  tags___parent___internal___owner = 'tags.parent.internal.owner',
  tags___parent___internal___type = 'tags.parent.internal.type',
  tags___children = 'tags.children',
  tags___children___id = 'tags.children.id',
  tags___children___parent___id = 'tags.children.parent.id',
  tags___children___parent___children = 'tags.children.parent.children',
  tags___children___children = 'tags.children.children',
  tags___children___children___id = 'tags.children.children.id',
  tags___children___children___children = 'tags.children.children.children',
  tags___children___internal___content = 'tags.children.internal.content',
  tags___children___internal___contentDigest = 'tags.children.internal.contentDigest',
  tags___children___internal___description = 'tags.children.internal.description',
  tags___children___internal___fieldOwners = 'tags.children.internal.fieldOwners',
  tags___children___internal___ignoreType = 'tags.children.internal.ignoreType',
  tags___children___internal___mediaType = 'tags.children.internal.mediaType',
  tags___children___internal___owner = 'tags.children.internal.owner',
  tags___children___internal___type = 'tags.children.internal.type',
  tags___internal___content = 'tags.internal.content',
  tags___internal___contentDigest = 'tags.internal.contentDigest',
  tags___internal___description = 'tags.internal.description',
  tags___internal___fieldOwners = 'tags.internal.fieldOwners',
  tags___internal___ignoreType = 'tags.internal.ignoreType',
  tags___internal___mediaType = 'tags.internal.mediaType',
  tags___internal___owner = 'tags.internal.owner',
  tags___internal___type = 'tags.internal.type',
  body___id = 'body.id',
  body___parent___id = 'body.parent.id',
  body___parent___parent___id = 'body.parent.parent.id',
  body___parent___parent___children = 'body.parent.parent.children',
  body___parent___children = 'body.parent.children',
  body___parent___children___id = 'body.parent.children.id',
  body___parent___children___children = 'body.parent.children.children',
  body___parent___internal___content = 'body.parent.internal.content',
  body___parent___internal___contentDigest = 'body.parent.internal.contentDigest',
  body___parent___internal___description = 'body.parent.internal.description',
  body___parent___internal___fieldOwners = 'body.parent.internal.fieldOwners',
  body___parent___internal___ignoreType = 'body.parent.internal.ignoreType',
  body___parent___internal___mediaType = 'body.parent.internal.mediaType',
  body___parent___internal___owner = 'body.parent.internal.owner',
  body___parent___internal___type = 'body.parent.internal.type',
  body___children = 'body.children',
  body___children___id = 'body.children.id',
  body___children___parent___id = 'body.children.parent.id',
  body___children___parent___children = 'body.children.parent.children',
  body___children___children = 'body.children.children',
  body___children___children___id = 'body.children.children.id',
  body___children___children___children = 'body.children.children.children',
  body___children___internal___content = 'body.children.internal.content',
  body___children___internal___contentDigest = 'body.children.internal.contentDigest',
  body___children___internal___description = 'body.children.internal.description',
  body___children___internal___fieldOwners = 'body.children.internal.fieldOwners',
  body___children___internal___ignoreType = 'body.children.internal.ignoreType',
  body___children___internal___mediaType = 'body.children.internal.mediaType',
  body___children___internal___owner = 'body.children.internal.owner',
  body___children___internal___type = 'body.children.internal.type',
  body___internal___content = 'body.internal.content',
  body___internal___contentDigest = 'body.internal.contentDigest',
  body___internal___description = 'body.internal.description',
  body___internal___fieldOwners = 'body.internal.fieldOwners',
  body___internal___ignoreType = 'body.internal.ignoreType',
  body___internal___mediaType = 'body.internal.mediaType',
  body___internal___owner = 'body.internal.owner',
  body___internal___type = 'body.internal.type',
  body___body = 'body.body',
  body___sys___type = 'body.sys.type',
  body___childMarkdownRemark___id = 'body.childMarkdownRemark.id',
  body___childMarkdownRemark___frontmatter___title = 'body.childMarkdownRemark.frontmatter.title',
  body___childMarkdownRemark___excerpt = 'body.childMarkdownRemark.excerpt',
  body___childMarkdownRemark___rawMarkdownBody = 'body.childMarkdownRemark.rawMarkdownBody',
  body___childMarkdownRemark___html = 'body.childMarkdownRemark.html',
  body___childMarkdownRemark___htmlAst = 'body.childMarkdownRemark.htmlAst',
  body___childMarkdownRemark___excerptAst = 'body.childMarkdownRemark.excerptAst',
  body___childMarkdownRemark___headings = 'body.childMarkdownRemark.headings',
  body___childMarkdownRemark___headings___id = 'body.childMarkdownRemark.headings.id',
  body___childMarkdownRemark___headings___value = 'body.childMarkdownRemark.headings.value',
  body___childMarkdownRemark___headings___depth = 'body.childMarkdownRemark.headings.depth',
  body___childMarkdownRemark___timeToRead = 'body.childMarkdownRemark.timeToRead',
  body___childMarkdownRemark___tableOfContents = 'body.childMarkdownRemark.tableOfContents',
  body___childMarkdownRemark___wordCount___paragraphs = 'body.childMarkdownRemark.wordCount.paragraphs',
  body___childMarkdownRemark___wordCount___sentences = 'body.childMarkdownRemark.wordCount.sentences',
  body___childMarkdownRemark___wordCount___words = 'body.childMarkdownRemark.wordCount.words',
  body___childMarkdownRemark___parent___id = 'body.childMarkdownRemark.parent.id',
  body___childMarkdownRemark___parent___children = 'body.childMarkdownRemark.parent.children',
  body___childMarkdownRemark___children = 'body.childMarkdownRemark.children',
  body___childMarkdownRemark___children___id = 'body.childMarkdownRemark.children.id',
  body___childMarkdownRemark___children___children = 'body.childMarkdownRemark.children.children',
  body___childMarkdownRemark___internal___content = 'body.childMarkdownRemark.internal.content',
  body___childMarkdownRemark___internal___contentDigest = 'body.childMarkdownRemark.internal.contentDigest',
  body___childMarkdownRemark___internal___description = 'body.childMarkdownRemark.internal.description',
  body___childMarkdownRemark___internal___fieldOwners = 'body.childMarkdownRemark.internal.fieldOwners',
  body___childMarkdownRemark___internal___ignoreType = 'body.childMarkdownRemark.internal.ignoreType',
  body___childMarkdownRemark___internal___mediaType = 'body.childMarkdownRemark.internal.mediaType',
  body___childMarkdownRemark___internal___owner = 'body.childMarkdownRemark.internal.owner',
  body___childMarkdownRemark___internal___type = 'body.childMarkdownRemark.internal.type',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childContentfulPostBodyTextNode___id = 'childContentfulPostBodyTextNode.id',
  childContentfulPostBodyTextNode___parent___id = 'childContentfulPostBodyTextNode.parent.id',
  childContentfulPostBodyTextNode___parent___parent___id = 'childContentfulPostBodyTextNode.parent.parent.id',
  childContentfulPostBodyTextNode___parent___parent___children = 'childContentfulPostBodyTextNode.parent.parent.children',
  childContentfulPostBodyTextNode___parent___children = 'childContentfulPostBodyTextNode.parent.children',
  childContentfulPostBodyTextNode___parent___children___id = 'childContentfulPostBodyTextNode.parent.children.id',
  childContentfulPostBodyTextNode___parent___children___children = 'childContentfulPostBodyTextNode.parent.children.children',
  childContentfulPostBodyTextNode___parent___internal___content = 'childContentfulPostBodyTextNode.parent.internal.content',
  childContentfulPostBodyTextNode___parent___internal___contentDigest = 'childContentfulPostBodyTextNode.parent.internal.contentDigest',
  childContentfulPostBodyTextNode___parent___internal___description = 'childContentfulPostBodyTextNode.parent.internal.description',
  childContentfulPostBodyTextNode___parent___internal___fieldOwners = 'childContentfulPostBodyTextNode.parent.internal.fieldOwners',
  childContentfulPostBodyTextNode___parent___internal___ignoreType = 'childContentfulPostBodyTextNode.parent.internal.ignoreType',
  childContentfulPostBodyTextNode___parent___internal___mediaType = 'childContentfulPostBodyTextNode.parent.internal.mediaType',
  childContentfulPostBodyTextNode___parent___internal___owner = 'childContentfulPostBodyTextNode.parent.internal.owner',
  childContentfulPostBodyTextNode___parent___internal___type = 'childContentfulPostBodyTextNode.parent.internal.type',
  childContentfulPostBodyTextNode___children = 'childContentfulPostBodyTextNode.children',
  childContentfulPostBodyTextNode___children___id = 'childContentfulPostBodyTextNode.children.id',
  childContentfulPostBodyTextNode___children___parent___id = 'childContentfulPostBodyTextNode.children.parent.id',
  childContentfulPostBodyTextNode___children___parent___children = 'childContentfulPostBodyTextNode.children.parent.children',
  childContentfulPostBodyTextNode___children___children = 'childContentfulPostBodyTextNode.children.children',
  childContentfulPostBodyTextNode___children___children___id = 'childContentfulPostBodyTextNode.children.children.id',
  childContentfulPostBodyTextNode___children___children___children = 'childContentfulPostBodyTextNode.children.children.children',
  childContentfulPostBodyTextNode___children___internal___content = 'childContentfulPostBodyTextNode.children.internal.content',
  childContentfulPostBodyTextNode___children___internal___contentDigest = 'childContentfulPostBodyTextNode.children.internal.contentDigest',
  childContentfulPostBodyTextNode___children___internal___description = 'childContentfulPostBodyTextNode.children.internal.description',
  childContentfulPostBodyTextNode___children___internal___fieldOwners = 'childContentfulPostBodyTextNode.children.internal.fieldOwners',
  childContentfulPostBodyTextNode___children___internal___ignoreType = 'childContentfulPostBodyTextNode.children.internal.ignoreType',
  childContentfulPostBodyTextNode___children___internal___mediaType = 'childContentfulPostBodyTextNode.children.internal.mediaType',
  childContentfulPostBodyTextNode___children___internal___owner = 'childContentfulPostBodyTextNode.children.internal.owner',
  childContentfulPostBodyTextNode___children___internal___type = 'childContentfulPostBodyTextNode.children.internal.type',
  childContentfulPostBodyTextNode___internal___content = 'childContentfulPostBodyTextNode.internal.content',
  childContentfulPostBodyTextNode___internal___contentDigest = 'childContentfulPostBodyTextNode.internal.contentDigest',
  childContentfulPostBodyTextNode___internal___description = 'childContentfulPostBodyTextNode.internal.description',
  childContentfulPostBodyTextNode___internal___fieldOwners = 'childContentfulPostBodyTextNode.internal.fieldOwners',
  childContentfulPostBodyTextNode___internal___ignoreType = 'childContentfulPostBodyTextNode.internal.ignoreType',
  childContentfulPostBodyTextNode___internal___mediaType = 'childContentfulPostBodyTextNode.internal.mediaType',
  childContentfulPostBodyTextNode___internal___owner = 'childContentfulPostBodyTextNode.internal.owner',
  childContentfulPostBodyTextNode___internal___type = 'childContentfulPostBodyTextNode.internal.type',
  childContentfulPostBodyTextNode___body = 'childContentfulPostBodyTextNode.body',
  childContentfulPostBodyTextNode___sys___type = 'childContentfulPostBodyTextNode.sys.type',
  childContentfulPostBodyTextNode___childMarkdownRemark___id = 'childContentfulPostBodyTextNode.childMarkdownRemark.id',
  childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___title = 'childContentfulPostBodyTextNode.childMarkdownRemark.frontmatter.title',
  childContentfulPostBodyTextNode___childMarkdownRemark___excerpt = 'childContentfulPostBodyTextNode.childMarkdownRemark.excerpt',
  childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'childContentfulPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  childContentfulPostBodyTextNode___childMarkdownRemark___html = 'childContentfulPostBodyTextNode.childMarkdownRemark.html',
  childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst = 'childContentfulPostBodyTextNode.childMarkdownRemark.htmlAst',
  childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst = 'childContentfulPostBodyTextNode.childMarkdownRemark.excerptAst',
  childContentfulPostBodyTextNode___childMarkdownRemark___headings = 'childContentfulPostBodyTextNode.childMarkdownRemark.headings',
  childContentfulPostBodyTextNode___childMarkdownRemark___headings___id = 'childContentfulPostBodyTextNode.childMarkdownRemark.headings.id',
  childContentfulPostBodyTextNode___childMarkdownRemark___headings___value = 'childContentfulPostBodyTextNode.childMarkdownRemark.headings.value',
  childContentfulPostBodyTextNode___childMarkdownRemark___headings___depth = 'childContentfulPostBodyTextNode.childMarkdownRemark.headings.depth',
  childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead = 'childContentfulPostBodyTextNode.childMarkdownRemark.timeToRead',
  childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents = 'childContentfulPostBodyTextNode.childMarkdownRemark.tableOfContents',
  childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs = 'childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.paragraphs',
  childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___sentences = 'childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.sentences',
  childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___words = 'childContentfulPostBodyTextNode.childMarkdownRemark.wordCount.words',
  childContentfulPostBodyTextNode___childMarkdownRemark___parent___id = 'childContentfulPostBodyTextNode.childMarkdownRemark.parent.id',
  childContentfulPostBodyTextNode___childMarkdownRemark___parent___children = 'childContentfulPostBodyTextNode.childMarkdownRemark.parent.children',
  childContentfulPostBodyTextNode___childMarkdownRemark___children = 'childContentfulPostBodyTextNode.childMarkdownRemark.children',
  childContentfulPostBodyTextNode___childMarkdownRemark___children___id = 'childContentfulPostBodyTextNode.childMarkdownRemark.children.id',
  childContentfulPostBodyTextNode___childMarkdownRemark___children___children = 'childContentfulPostBodyTextNode.childMarkdownRemark.children.children',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___content = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.content',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___contentDigest = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.contentDigest',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___description = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.description',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___fieldOwners = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.fieldOwners',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___ignoreType = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.ignoreType',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___mediaType = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.mediaType',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___owner = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.owner',
  childContentfulPostBodyTextNode___childMarkdownRemark___internal___type = 'childContentfulPostBodyTextNode.childMarkdownRemark.internal.type'
}

type ContentfulPostFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly featured: Maybe<BooleanQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<ContentfulAuthorFilterListInput>;
  readonly hero: Maybe<ContentfulAssetFilterInput>;
  readonly tags: Maybe<ContentfulTagFilterListInput>;
  readonly body: Maybe<contentfulPostBodyTextNodeFilterInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulPostSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
};

type ContentfulPostFilterListInput = {
  readonly elemMatch: Maybe<ContentfulPostFilterInput>;
};

type ContentfulPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulPostEdge>;
  readonly nodes: ReadonlyArray<ContentfulPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulPostSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulPostSysContentType>;
};

type ContentfulPostSysContentType = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSys>;
};

type ContentfulPostSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

type ContentfulPostSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulPostSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulPostSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

type ContentfulReference = {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
};

type ContentfulResize = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
};

type ContentfulResizeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type ContentfulResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type ContentfulResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
};

type ContentfulSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

type ContentfulSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
};

type ContentfulTag = ContentfulReference & ContentfulEntry & Node & {
  readonly contentful_id: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly node_locale: Scalars['String'];
  readonly tagName: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly description: Maybe<ContentfulTagDescription>;
  readonly image: Maybe<ContentfulAsset>;
  readonly post: Maybe<ReadonlyArray<Maybe<ContentfulPost>>>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly createdAt: Maybe<Scalars['Date']>;
  readonly updatedAt: Maybe<Scalars['Date']>;
  readonly sys: Maybe<ContentfulTagSys>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ContentfulTag_createdAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type ContentfulTag_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type ContentfulTagConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ContentfulTagGroupConnection>;
};


type ContentfulTagConnection_distinctArgs = {
  field: ContentfulTagFieldsEnum;
};


type ContentfulTagConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ContentfulTagFieldsEnum;
};

type ContentfulTagDescription = {
  readonly raw: Maybe<Scalars['String']>;
};

type ContentfulTagDescriptionFilterInput = {
  readonly raw: Maybe<StringQueryOperatorInput>;
};

type ContentfulTagEdge = {
  readonly next: Maybe<ContentfulTag>;
  readonly node: ContentfulTag;
  readonly previous: Maybe<ContentfulTag>;
};

enum ContentfulTagFieldsEnum {
  contentful_id = 'contentful_id',
  id = 'id',
  node_locale = 'node_locale',
  tagName = 'tagName',
  slug = 'slug',
  description___raw = 'description.raw',
  image___contentful_id = 'image.contentful_id',
  image___id = 'image.id',
  image___spaceId = 'image.spaceId',
  image___createdAt = 'image.createdAt',
  image___updatedAt = 'image.updatedAt',
  image___file___url = 'image.file.url',
  image___file___details___size = 'image.file.details.size',
  image___file___fileName = 'image.file.fileName',
  image___file___contentType = 'image.file.contentType',
  image___title = 'image.title',
  image___description = 'image.description',
  image___node_locale = 'image.node_locale',
  image___sys___type = 'image.sys.type',
  image___sys___revision = 'image.sys.revision',
  image___fixed___base64 = 'image.fixed.base64',
  image___fixed___tracedSVG = 'image.fixed.tracedSVG',
  image___fixed___aspectRatio = 'image.fixed.aspectRatio',
  image___fixed___width = 'image.fixed.width',
  image___fixed___height = 'image.fixed.height',
  image___fixed___src = 'image.fixed.src',
  image___fixed___srcSet = 'image.fixed.srcSet',
  image___fixed___srcWebp = 'image.fixed.srcWebp',
  image___fixed___srcSetWebp = 'image.fixed.srcSetWebp',
  image___resolutions___base64 = 'image.resolutions.base64',
  image___resolutions___tracedSVG = 'image.resolutions.tracedSVG',
  image___resolutions___aspectRatio = 'image.resolutions.aspectRatio',
  image___resolutions___width = 'image.resolutions.width',
  image___resolutions___height = 'image.resolutions.height',
  image___resolutions___src = 'image.resolutions.src',
  image___resolutions___srcSet = 'image.resolutions.srcSet',
  image___resolutions___srcWebp = 'image.resolutions.srcWebp',
  image___resolutions___srcSetWebp = 'image.resolutions.srcSetWebp',
  image___fluid___base64 = 'image.fluid.base64',
  image___fluid___tracedSVG = 'image.fluid.tracedSVG',
  image___fluid___aspectRatio = 'image.fluid.aspectRatio',
  image___fluid___src = 'image.fluid.src',
  image___fluid___srcSet = 'image.fluid.srcSet',
  image___fluid___srcWebp = 'image.fluid.srcWebp',
  image___fluid___srcSetWebp = 'image.fluid.srcSetWebp',
  image___fluid___sizes = 'image.fluid.sizes',
  image___sizes___base64 = 'image.sizes.base64',
  image___sizes___tracedSVG = 'image.sizes.tracedSVG',
  image___sizes___aspectRatio = 'image.sizes.aspectRatio',
  image___sizes___src = 'image.sizes.src',
  image___sizes___srcSet = 'image.sizes.srcSet',
  image___sizes___srcWebp = 'image.sizes.srcWebp',
  image___sizes___srcSetWebp = 'image.sizes.srcSetWebp',
  image___sizes___sizes = 'image.sizes.sizes',
  image___resize___base64 = 'image.resize.base64',
  image___resize___tracedSVG = 'image.resize.tracedSVG',
  image___resize___src = 'image.resize.src',
  image___resize___width = 'image.resize.width',
  image___resize___height = 'image.resize.height',
  image___resize___aspectRatio = 'image.resize.aspectRatio',
  image___parent___id = 'image.parent.id',
  image___parent___parent___id = 'image.parent.parent.id',
  image___parent___parent___children = 'image.parent.parent.children',
  image___parent___children = 'image.parent.children',
  image___parent___children___id = 'image.parent.children.id',
  image___parent___children___children = 'image.parent.children.children',
  image___parent___internal___content = 'image.parent.internal.content',
  image___parent___internal___contentDigest = 'image.parent.internal.contentDigest',
  image___parent___internal___description = 'image.parent.internal.description',
  image___parent___internal___fieldOwners = 'image.parent.internal.fieldOwners',
  image___parent___internal___ignoreType = 'image.parent.internal.ignoreType',
  image___parent___internal___mediaType = 'image.parent.internal.mediaType',
  image___parent___internal___owner = 'image.parent.internal.owner',
  image___parent___internal___type = 'image.parent.internal.type',
  image___children = 'image.children',
  image___children___id = 'image.children.id',
  image___children___parent___id = 'image.children.parent.id',
  image___children___parent___children = 'image.children.parent.children',
  image___children___children = 'image.children.children',
  image___children___children___id = 'image.children.children.id',
  image___children___children___children = 'image.children.children.children',
  image___children___internal___content = 'image.children.internal.content',
  image___children___internal___contentDigest = 'image.children.internal.contentDigest',
  image___children___internal___description = 'image.children.internal.description',
  image___children___internal___fieldOwners = 'image.children.internal.fieldOwners',
  image___children___internal___ignoreType = 'image.children.internal.ignoreType',
  image___children___internal___mediaType = 'image.children.internal.mediaType',
  image___children___internal___owner = 'image.children.internal.owner',
  image___children___internal___type = 'image.children.internal.type',
  image___internal___content = 'image.internal.content',
  image___internal___contentDigest = 'image.internal.contentDigest',
  image___internal___description = 'image.internal.description',
  image___internal___fieldOwners = 'image.internal.fieldOwners',
  image___internal___ignoreType = 'image.internal.ignoreType',
  image___internal___mediaType = 'image.internal.mediaType',
  image___internal___owner = 'image.internal.owner',
  image___internal___type = 'image.internal.type',
  post = 'post',
  post___contentful_id = 'post.contentful_id',
  post___id = 'post.id',
  post___node_locale = 'post.node_locale',
  post___title = 'post.title',
  post___featured = 'post.featured',
  post___slug = 'post.slug',
  post___date = 'post.date',
  post___excerpt = 'post.excerpt',
  post___author = 'post.author',
  post___author___contentful_id = 'post.author.contentful_id',
  post___author___id = 'post.author.id',
  post___author___node_locale = 'post.author.node_locale',
  post___author___name = 'post.author.name',
  post___author___subtitle = 'post.author.subtitle',
  post___author___slug = 'post.author.slug',
  post___author___social = 'post.author.social',
  post___author___featured = 'post.author.featured',
  post___author___location = 'post.author.location',
  post___author___avatar___contentful_id = 'post.author.avatar.contentful_id',
  post___author___avatar___id = 'post.author.avatar.id',
  post___author___avatar___spaceId = 'post.author.avatar.spaceId',
  post___author___avatar___createdAt = 'post.author.avatar.createdAt',
  post___author___avatar___updatedAt = 'post.author.avatar.updatedAt',
  post___author___avatar___title = 'post.author.avatar.title',
  post___author___avatar___description = 'post.author.avatar.description',
  post___author___avatar___node_locale = 'post.author.avatar.node_locale',
  post___author___avatar___children = 'post.author.avatar.children',
  post___author___profileImage___contentful_id = 'post.author.profileImage.contentful_id',
  post___author___profileImage___id = 'post.author.profileImage.id',
  post___author___profileImage___spaceId = 'post.author.profileImage.spaceId',
  post___author___profileImage___createdAt = 'post.author.profileImage.createdAt',
  post___author___profileImage___updatedAt = 'post.author.profileImage.updatedAt',
  post___author___profileImage___title = 'post.author.profileImage.title',
  post___author___profileImage___description = 'post.author.profileImage.description',
  post___author___profileImage___node_locale = 'post.author.profileImage.node_locale',
  post___author___profileImage___children = 'post.author.profileImage.children',
  post___author___post = 'post.author.post',
  post___author___post___contentful_id = 'post.author.post.contentful_id',
  post___author___post___id = 'post.author.post.id',
  post___author___post___node_locale = 'post.author.post.node_locale',
  post___author___post___title = 'post.author.post.title',
  post___author___post___featured = 'post.author.post.featured',
  post___author___post___slug = 'post.author.post.slug',
  post___author___post___date = 'post.author.post.date',
  post___author___post___excerpt = 'post.author.post.excerpt',
  post___author___post___author = 'post.author.post.author',
  post___author___post___tags = 'post.author.post.tags',
  post___author___post___spaceId = 'post.author.post.spaceId',
  post___author___post___createdAt = 'post.author.post.createdAt',
  post___author___post___updatedAt = 'post.author.post.updatedAt',
  post___author___post___children = 'post.author.post.children',
  post___author___personal_info___id = 'post.author.personal_info.id',
  post___author___personal_info___children = 'post.author.personal_info.children',
  post___author___personal_info___personal_info = 'post.author.personal_info.personal_info',
  post___author___spaceId = 'post.author.spaceId',
  post___author___createdAt = 'post.author.createdAt',
  post___author___updatedAt = 'post.author.updatedAt',
  post___author___sys___type = 'post.author.sys.type',
  post___author___sys___revision = 'post.author.sys.revision',
  post___author___parent___id = 'post.author.parent.id',
  post___author___parent___children = 'post.author.parent.children',
  post___author___children = 'post.author.children',
  post___author___children___id = 'post.author.children.id',
  post___author___children___children = 'post.author.children.children',
  post___author___internal___content = 'post.author.internal.content',
  post___author___internal___contentDigest = 'post.author.internal.contentDigest',
  post___author___internal___description = 'post.author.internal.description',
  post___author___internal___fieldOwners = 'post.author.internal.fieldOwners',
  post___author___internal___ignoreType = 'post.author.internal.ignoreType',
  post___author___internal___mediaType = 'post.author.internal.mediaType',
  post___author___internal___owner = 'post.author.internal.owner',
  post___author___internal___type = 'post.author.internal.type',
  post___author___childContentfulAuthorPersonalInfoTextNode___id = 'post.author.childContentfulAuthorPersonalInfoTextNode.id',
  post___author___childContentfulAuthorPersonalInfoTextNode___children = 'post.author.childContentfulAuthorPersonalInfoTextNode.children',
  post___author___childContentfulAuthorPersonalInfoTextNode___personal_info = 'post.author.childContentfulAuthorPersonalInfoTextNode.personal_info',
  post___hero___contentful_id = 'post.hero.contentful_id',
  post___hero___id = 'post.hero.id',
  post___hero___spaceId = 'post.hero.spaceId',
  post___hero___createdAt = 'post.hero.createdAt',
  post___hero___updatedAt = 'post.hero.updatedAt',
  post___hero___file___url = 'post.hero.file.url',
  post___hero___file___fileName = 'post.hero.file.fileName',
  post___hero___file___contentType = 'post.hero.file.contentType',
  post___hero___title = 'post.hero.title',
  post___hero___description = 'post.hero.description',
  post___hero___node_locale = 'post.hero.node_locale',
  post___hero___sys___type = 'post.hero.sys.type',
  post___hero___sys___revision = 'post.hero.sys.revision',
  post___hero___fixed___base64 = 'post.hero.fixed.base64',
  post___hero___fixed___tracedSVG = 'post.hero.fixed.tracedSVG',
  post___hero___fixed___aspectRatio = 'post.hero.fixed.aspectRatio',
  post___hero___fixed___width = 'post.hero.fixed.width',
  post___hero___fixed___height = 'post.hero.fixed.height',
  post___hero___fixed___src = 'post.hero.fixed.src',
  post___hero___fixed___srcSet = 'post.hero.fixed.srcSet',
  post___hero___fixed___srcWebp = 'post.hero.fixed.srcWebp',
  post___hero___fixed___srcSetWebp = 'post.hero.fixed.srcSetWebp',
  post___hero___resolutions___base64 = 'post.hero.resolutions.base64',
  post___hero___resolutions___tracedSVG = 'post.hero.resolutions.tracedSVG',
  post___hero___resolutions___aspectRatio = 'post.hero.resolutions.aspectRatio',
  post___hero___resolutions___width = 'post.hero.resolutions.width',
  post___hero___resolutions___height = 'post.hero.resolutions.height',
  post___hero___resolutions___src = 'post.hero.resolutions.src',
  post___hero___resolutions___srcSet = 'post.hero.resolutions.srcSet',
  post___hero___resolutions___srcWebp = 'post.hero.resolutions.srcWebp',
  post___hero___resolutions___srcSetWebp = 'post.hero.resolutions.srcSetWebp',
  post___hero___fluid___base64 = 'post.hero.fluid.base64',
  post___hero___fluid___tracedSVG = 'post.hero.fluid.tracedSVG',
  post___hero___fluid___aspectRatio = 'post.hero.fluid.aspectRatio',
  post___hero___fluid___src = 'post.hero.fluid.src',
  post___hero___fluid___srcSet = 'post.hero.fluid.srcSet',
  post___hero___fluid___srcWebp = 'post.hero.fluid.srcWebp',
  post___hero___fluid___srcSetWebp = 'post.hero.fluid.srcSetWebp',
  post___hero___fluid___sizes = 'post.hero.fluid.sizes',
  post___hero___sizes___base64 = 'post.hero.sizes.base64',
  post___hero___sizes___tracedSVG = 'post.hero.sizes.tracedSVG',
  post___hero___sizes___aspectRatio = 'post.hero.sizes.aspectRatio',
  post___hero___sizes___src = 'post.hero.sizes.src',
  post___hero___sizes___srcSet = 'post.hero.sizes.srcSet',
  post___hero___sizes___srcWebp = 'post.hero.sizes.srcWebp',
  post___hero___sizes___srcSetWebp = 'post.hero.sizes.srcSetWebp',
  post___hero___sizes___sizes = 'post.hero.sizes.sizes',
  post___hero___resize___base64 = 'post.hero.resize.base64',
  post___hero___resize___tracedSVG = 'post.hero.resize.tracedSVG',
  post___hero___resize___src = 'post.hero.resize.src',
  post___hero___resize___width = 'post.hero.resize.width',
  post___hero___resize___height = 'post.hero.resize.height',
  post___hero___resize___aspectRatio = 'post.hero.resize.aspectRatio',
  post___hero___parent___id = 'post.hero.parent.id',
  post___hero___parent___children = 'post.hero.parent.children',
  post___hero___children = 'post.hero.children',
  post___hero___children___id = 'post.hero.children.id',
  post___hero___children___children = 'post.hero.children.children',
  post___hero___internal___content = 'post.hero.internal.content',
  post___hero___internal___contentDigest = 'post.hero.internal.contentDigest',
  post___hero___internal___description = 'post.hero.internal.description',
  post___hero___internal___fieldOwners = 'post.hero.internal.fieldOwners',
  post___hero___internal___ignoreType = 'post.hero.internal.ignoreType',
  post___hero___internal___mediaType = 'post.hero.internal.mediaType',
  post___hero___internal___owner = 'post.hero.internal.owner',
  post___hero___internal___type = 'post.hero.internal.type',
  post___tags = 'post.tags',
  post___tags___contentful_id = 'post.tags.contentful_id',
  post___tags___id = 'post.tags.id',
  post___tags___node_locale = 'post.tags.node_locale',
  post___tags___tagName = 'post.tags.tagName',
  post___tags___slug = 'post.tags.slug',
  post___tags___description___raw = 'post.tags.description.raw',
  post___tags___image___contentful_id = 'post.tags.image.contentful_id',
  post___tags___image___id = 'post.tags.image.id',
  post___tags___image___spaceId = 'post.tags.image.spaceId',
  post___tags___image___createdAt = 'post.tags.image.createdAt',
  post___tags___image___updatedAt = 'post.tags.image.updatedAt',
  post___tags___image___title = 'post.tags.image.title',
  post___tags___image___description = 'post.tags.image.description',
  post___tags___image___node_locale = 'post.tags.image.node_locale',
  post___tags___image___children = 'post.tags.image.children',
  post___tags___post = 'post.tags.post',
  post___tags___post___contentful_id = 'post.tags.post.contentful_id',
  post___tags___post___id = 'post.tags.post.id',
  post___tags___post___node_locale = 'post.tags.post.node_locale',
  post___tags___post___title = 'post.tags.post.title',
  post___tags___post___featured = 'post.tags.post.featured',
  post___tags___post___slug = 'post.tags.post.slug',
  post___tags___post___date = 'post.tags.post.date',
  post___tags___post___excerpt = 'post.tags.post.excerpt',
  post___tags___post___author = 'post.tags.post.author',
  post___tags___post___tags = 'post.tags.post.tags',
  post___tags___post___spaceId = 'post.tags.post.spaceId',
  post___tags___post___createdAt = 'post.tags.post.createdAt',
  post___tags___post___updatedAt = 'post.tags.post.updatedAt',
  post___tags___post___children = 'post.tags.post.children',
  post___tags___spaceId = 'post.tags.spaceId',
  post___tags___createdAt = 'post.tags.createdAt',
  post___tags___updatedAt = 'post.tags.updatedAt',
  post___tags___sys___type = 'post.tags.sys.type',
  post___tags___sys___revision = 'post.tags.sys.revision',
  post___tags___parent___id = 'post.tags.parent.id',
  post___tags___parent___children = 'post.tags.parent.children',
  post___tags___children = 'post.tags.children',
  post___tags___children___id = 'post.tags.children.id',
  post___tags___children___children = 'post.tags.children.children',
  post___tags___internal___content = 'post.tags.internal.content',
  post___tags___internal___contentDigest = 'post.tags.internal.contentDigest',
  post___tags___internal___description = 'post.tags.internal.description',
  post___tags___internal___fieldOwners = 'post.tags.internal.fieldOwners',
  post___tags___internal___ignoreType = 'post.tags.internal.ignoreType',
  post___tags___internal___mediaType = 'post.tags.internal.mediaType',
  post___tags___internal___owner = 'post.tags.internal.owner',
  post___tags___internal___type = 'post.tags.internal.type',
  post___body___id = 'post.body.id',
  post___body___parent___id = 'post.body.parent.id',
  post___body___parent___children = 'post.body.parent.children',
  post___body___children = 'post.body.children',
  post___body___children___id = 'post.body.children.id',
  post___body___children___children = 'post.body.children.children',
  post___body___internal___content = 'post.body.internal.content',
  post___body___internal___contentDigest = 'post.body.internal.contentDigest',
  post___body___internal___description = 'post.body.internal.description',
  post___body___internal___fieldOwners = 'post.body.internal.fieldOwners',
  post___body___internal___ignoreType = 'post.body.internal.ignoreType',
  post___body___internal___mediaType = 'post.body.internal.mediaType',
  post___body___internal___owner = 'post.body.internal.owner',
  post___body___internal___type = 'post.body.internal.type',
  post___body___body = 'post.body.body',
  post___body___sys___type = 'post.body.sys.type',
  post___body___childMarkdownRemark___id = 'post.body.childMarkdownRemark.id',
  post___body___childMarkdownRemark___excerpt = 'post.body.childMarkdownRemark.excerpt',
  post___body___childMarkdownRemark___rawMarkdownBody = 'post.body.childMarkdownRemark.rawMarkdownBody',
  post___body___childMarkdownRemark___html = 'post.body.childMarkdownRemark.html',
  post___body___childMarkdownRemark___htmlAst = 'post.body.childMarkdownRemark.htmlAst',
  post___body___childMarkdownRemark___excerptAst = 'post.body.childMarkdownRemark.excerptAst',
  post___body___childMarkdownRemark___headings = 'post.body.childMarkdownRemark.headings',
  post___body___childMarkdownRemark___timeToRead = 'post.body.childMarkdownRemark.timeToRead',
  post___body___childMarkdownRemark___tableOfContents = 'post.body.childMarkdownRemark.tableOfContents',
  post___body___childMarkdownRemark___children = 'post.body.childMarkdownRemark.children',
  post___spaceId = 'post.spaceId',
  post___createdAt = 'post.createdAt',
  post___updatedAt = 'post.updatedAt',
  post___sys___type = 'post.sys.type',
  post___sys___revision = 'post.sys.revision',
  post___parent___id = 'post.parent.id',
  post___parent___parent___id = 'post.parent.parent.id',
  post___parent___parent___children = 'post.parent.parent.children',
  post___parent___children = 'post.parent.children',
  post___parent___children___id = 'post.parent.children.id',
  post___parent___children___children = 'post.parent.children.children',
  post___parent___internal___content = 'post.parent.internal.content',
  post___parent___internal___contentDigest = 'post.parent.internal.contentDigest',
  post___parent___internal___description = 'post.parent.internal.description',
  post___parent___internal___fieldOwners = 'post.parent.internal.fieldOwners',
  post___parent___internal___ignoreType = 'post.parent.internal.ignoreType',
  post___parent___internal___mediaType = 'post.parent.internal.mediaType',
  post___parent___internal___owner = 'post.parent.internal.owner',
  post___parent___internal___type = 'post.parent.internal.type',
  post___children = 'post.children',
  post___children___id = 'post.children.id',
  post___children___parent___id = 'post.children.parent.id',
  post___children___parent___children = 'post.children.parent.children',
  post___children___children = 'post.children.children',
  post___children___children___id = 'post.children.children.id',
  post___children___children___children = 'post.children.children.children',
  post___children___internal___content = 'post.children.internal.content',
  post___children___internal___contentDigest = 'post.children.internal.contentDigest',
  post___children___internal___description = 'post.children.internal.description',
  post___children___internal___fieldOwners = 'post.children.internal.fieldOwners',
  post___children___internal___ignoreType = 'post.children.internal.ignoreType',
  post___children___internal___mediaType = 'post.children.internal.mediaType',
  post___children___internal___owner = 'post.children.internal.owner',
  post___children___internal___type = 'post.children.internal.type',
  post___internal___content = 'post.internal.content',
  post___internal___contentDigest = 'post.internal.contentDigest',
  post___internal___description = 'post.internal.description',
  post___internal___fieldOwners = 'post.internal.fieldOwners',
  post___internal___ignoreType = 'post.internal.ignoreType',
  post___internal___mediaType = 'post.internal.mediaType',
  post___internal___owner = 'post.internal.owner',
  post___internal___type = 'post.internal.type',
  post___childContentfulPostBodyTextNode___id = 'post.childContentfulPostBodyTextNode.id',
  post___childContentfulPostBodyTextNode___parent___id = 'post.childContentfulPostBodyTextNode.parent.id',
  post___childContentfulPostBodyTextNode___parent___children = 'post.childContentfulPostBodyTextNode.parent.children',
  post___childContentfulPostBodyTextNode___children = 'post.childContentfulPostBodyTextNode.children',
  post___childContentfulPostBodyTextNode___children___id = 'post.childContentfulPostBodyTextNode.children.id',
  post___childContentfulPostBodyTextNode___children___children = 'post.childContentfulPostBodyTextNode.children.children',
  post___childContentfulPostBodyTextNode___internal___content = 'post.childContentfulPostBodyTextNode.internal.content',
  post___childContentfulPostBodyTextNode___internal___contentDigest = 'post.childContentfulPostBodyTextNode.internal.contentDigest',
  post___childContentfulPostBodyTextNode___internal___description = 'post.childContentfulPostBodyTextNode.internal.description',
  post___childContentfulPostBodyTextNode___internal___fieldOwners = 'post.childContentfulPostBodyTextNode.internal.fieldOwners',
  post___childContentfulPostBodyTextNode___internal___ignoreType = 'post.childContentfulPostBodyTextNode.internal.ignoreType',
  post___childContentfulPostBodyTextNode___internal___mediaType = 'post.childContentfulPostBodyTextNode.internal.mediaType',
  post___childContentfulPostBodyTextNode___internal___owner = 'post.childContentfulPostBodyTextNode.internal.owner',
  post___childContentfulPostBodyTextNode___internal___type = 'post.childContentfulPostBodyTextNode.internal.type',
  post___childContentfulPostBodyTextNode___body = 'post.childContentfulPostBodyTextNode.body',
  post___childContentfulPostBodyTextNode___sys___type = 'post.childContentfulPostBodyTextNode.sys.type',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___id = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.id',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.rawMarkdownBody',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___html = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.html',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.htmlAst',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.excerptAst',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___headings = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.headings',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.timeToRead',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.tableOfContents',
  post___childContentfulPostBodyTextNode___childMarkdownRemark___children = 'post.childContentfulPostBodyTextNode.childMarkdownRemark.children',
  spaceId = 'spaceId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  sys___type = 'sys.type',
  sys___revision = 'sys.revision',
  sys___contentType___sys___type = 'sys.contentType.sys.type',
  sys___contentType___sys___linkType = 'sys.contentType.sys.linkType',
  sys___contentType___sys___id = 'sys.contentType.sys.id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ContentfulTagFilterInput = {
  readonly contentful_id: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly node_locale: Maybe<StringQueryOperatorInput>;
  readonly tagName: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<ContentfulTagDescriptionFilterInput>;
  readonly image: Maybe<ContentfulAssetFilterInput>;
  readonly post: Maybe<ContentfulPostFilterListInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly createdAt: Maybe<DateQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly sys: Maybe<ContentfulTagSysFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ContentfulTagFilterListInput = {
  readonly elemMatch: Maybe<ContentfulTagFilterInput>;
};

type ContentfulTagGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ContentfulTagEdge>;
  readonly nodes: ReadonlyArray<ContentfulTag>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ContentfulTagSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ContentfulTagFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ContentfulTagSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly revision: Maybe<Scalars['Int']>;
  readonly contentType: Maybe<ContentfulTagSysContentType>;
};

type ContentfulTagSysContentType = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSys>;
};

type ContentfulTagSysContentTypeFilterInput = {
  readonly sys: Maybe<ContentfulTagSysContentTypeSysFilterInput>;
};

type ContentfulTagSysContentTypeSys = {
  readonly type: Maybe<Scalars['String']>;
  readonly linkType: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
};

type ContentfulTagSysContentTypeSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly linkType: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
};

type ContentfulTagSysFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly revision: Maybe<IntQueryOperatorInput>;
  readonly contentType: Maybe<ContentfulTagSysContentTypeFilterInput>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp.gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

enum ImageCropFocus {
  CENTER = 0,
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = '',
  AUTO = '',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

enum ImageLayout {
  FIXED = 'fixed',
  FLUID = 'fluid',
  CONSTRAINED = 'constrained'
}

enum ImagePlaceholder {
  DOMINANT_COLOR = 'dominantColor',
  TRACED_SVG = 'tracedSVG',
  BLURRED = 'blurred',
  NONE = 'none'
}

enum ImageResizingBehavior {
  NO_CHANGE = '',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  PAD = 'pad',
  /** Crop a part of the original image to match the specified size. */
  CROP = 'crop',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  FILL = 'fill',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  THUMB = 'thumb',
  /** Scale the image regardless of the original aspect ratio. */
  SCALE = 'scale'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats?: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  transformOptions: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings.id',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly contentfulEntry: Maybe<ContentfulEntry>;
  readonly allContentfulEntry: ContentfulEntryConnection;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly contentfulAsset: Maybe<ContentfulAsset>;
  readonly allContentfulAsset: ContentfulAssetConnection;
  readonly contentfulPost: Maybe<ContentfulPost>;
  readonly allContentfulPost: ContentfulPostConnection;
  readonly contentfulAuthor: Maybe<ContentfulAuthor>;
  readonly allContentfulAuthor: ContentfulAuthorConnection;
  readonly contentfulTag: Maybe<ContentfulTag>;
  readonly allContentfulTag: ContentfulTagConnection;
  readonly contentfulAuthorPersonalInfoTextNode: Maybe<contentfulAuthorPersonalInfoTextNode>;
  readonly allContentfulAuthorPersonalInfoTextNode: contentfulAuthorPersonalInfoTextNodeConnection;
  readonly contentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNode>;
  readonly allContentfulPostBodyTextNode: contentfulPostBodyTextNodeConnection;
  readonly contentfulContentType: Maybe<ContentfulContentType>;
  readonly allContentfulContentType: ContentfulContentTypeConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_contentfulEntryArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
};


type Query_allContentfulEntryArgs = {
  filter: Maybe<ContentfulEntryFilterInput>;
  sort: Maybe<ContentfulEntrySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAssetArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  file: Maybe<ContentfulAssetFileFilterInput>;
  title: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulAssetSysFilterInput>;
  fixed: Maybe<ContentfulFixedFilterInput>;
  resolutions: Maybe<ContentfulResolutionsFilterInput>;
  fluid: Maybe<ContentfulFluidFilterInput>;
  sizes: Maybe<ContentfulSizesFilterInput>;
  resize: Maybe<ContentfulResizeFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulAssetArgs = {
  filter: Maybe<ContentfulAssetFilterInput>;
  sort: Maybe<ContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  date: Maybe<DateQueryOperatorInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  author: Maybe<ContentfulAuthorFilterListInput>;
  hero: Maybe<ContentfulAssetFilterInput>;
  tags: Maybe<ContentfulTagFilterListInput>;
  body: Maybe<contentfulPostBodyTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulPostSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childContentfulPostBodyTextNode: Maybe<contentfulPostBodyTextNodeFilterInput>;
};


type Query_allContentfulPostArgs = {
  filter: Maybe<ContentfulPostFilterInput>;
  sort: Maybe<ContentfulPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  subtitle: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  social: Maybe<StringQueryOperatorInput>;
  featured: Maybe<BooleanQueryOperatorInput>;
  location: Maybe<StringQueryOperatorInput>;
  avatar: Maybe<ContentfulAssetFilterInput>;
  profileImage: Maybe<ContentfulAssetFilterInput>;
  post: Maybe<ContentfulPostFilterListInput>;
  personal_info: Maybe<contentfulAuthorPersonalInfoTextNodeFilterInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulAuthorSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childContentfulAuthorPersonalInfoTextNode: Maybe<contentfulAuthorPersonalInfoTextNodeFilterInput>;
};


type Query_allContentfulAuthorArgs = {
  filter: Maybe<ContentfulAuthorFilterInput>;
  sort: Maybe<ContentfulAuthorSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulTagArgs = {
  contentful_id: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  node_locale: Maybe<StringQueryOperatorInput>;
  tagName: Maybe<StringQueryOperatorInput>;
  slug: Maybe<StringQueryOperatorInput>;
  description: Maybe<ContentfulTagDescriptionFilterInput>;
  image: Maybe<ContentfulAssetFilterInput>;
  post: Maybe<ContentfulPostFilterListInput>;
  spaceId: Maybe<StringQueryOperatorInput>;
  createdAt: Maybe<DateQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  sys: Maybe<ContentfulTagSysFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allContentfulTagArgs = {
  filter: Maybe<ContentfulTagFilterInput>;
  sort: Maybe<ContentfulTagSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulAuthorPersonalInfoTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  personal_info: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulAuthorPersonalInfoTextNodeSysFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulAuthorPersonalInfoTextNodeArgs = {
  filter: Maybe<contentfulAuthorPersonalInfoTextNodeFilterInput>;
  sort: Maybe<contentfulAuthorPersonalInfoTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulPostBodyTextNodeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  body: Maybe<StringQueryOperatorInput>;
  sys: Maybe<contentfulPostBodyTextNodeSysFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allContentfulPostBodyTextNodeArgs = {
  filter: Maybe<contentfulPostBodyTextNodeFilterInput>;
  sort: Maybe<contentfulPostBodyTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_contentfulContentTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  name: Maybe<StringQueryOperatorInput>;
  displayField: Maybe<StringQueryOperatorInput>;
  description: Maybe<StringQueryOperatorInput>;
  sys: Maybe<ContentfulContentTypeSysFilterInput>;
};


type Query_allContentfulContentTypeArgs = {
  filter: Maybe<ContentfulContentTypeFilterInput>;
  sort: Maybe<ContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___author = 'siteMetadata.author',
  siteMetadata___siteURL = 'siteMetadata.siteURL',
  siteMetadata___lang = 'siteMetadata.lang',
  siteMetadata___keywords = 'siteMetadata.keywords',
  siteMetadata___coverImage = 'siteMetadata.coverImage',
  siteMetadata___logo = 'siteMetadata.logo',
  siteMetadata___facebook = 'siteMetadata.facebook',
  siteMetadata___twitter = 'siteMetadata.twitter',
  siteMetadata___showSubscribe = 'siteMetadata.showSubscribe',
  siteMetadata___footer = 'siteMetadata.footer',
  port = 'port',
  host = 'host',
  flags___PRESERVE_WEBPACK_CACHE = 'flags.PRESERVE_WEBPACK_CACHE',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFlags = {
  readonly PRESERVE_WEBPACK_CACHE: Maybe<Scalars['Boolean']>;
};

type SiteFlagsFilterInput = {
  readonly PRESERVE_WEBPACK_CACHE: Maybe<BooleanQueryOperatorInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageContext = {
  readonly limit: Maybe<Scalars['Int']>;
  readonly skip: Maybe<Scalars['Int']>;
  readonly numPages: Maybe<Scalars['Int']>;
  readonly currentPage: Maybe<Scalars['Int']>;
  readonly prev: Maybe<SitePageContextPrev>;
  readonly next: Maybe<SitePageContextNext>;
  readonly slug: Maybe<Scalars['String']>;
  readonly primaryTag: Maybe<Scalars['String']>;
  readonly tag: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
};

type SitePageContextFilterInput = {
  readonly limit: Maybe<IntQueryOperatorInput>;
  readonly skip: Maybe<IntQueryOperatorInput>;
  readonly numPages: Maybe<IntQueryOperatorInput>;
  readonly currentPage: Maybe<IntQueryOperatorInput>;
  readonly prev: Maybe<SitePageContextPrevFilterInput>;
  readonly next: Maybe<SitePageContextNextFilterInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly primaryTag: Maybe<StringQueryOperatorInput>;
  readonly tag: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
};

type SitePageContextNext = {
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<SitePageContextNextTags>>>;
  readonly author: Maybe<ReadonlyArray<Maybe<SitePageContextNextAuthor>>>;
};

type SitePageContextNextAuthor = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextNextAuthorFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextNextAuthorFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextNextAuthorFilterInput>;
};

type SitePageContextNextFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<SitePageContextNextTagsFilterListInput>;
  readonly author: Maybe<SitePageContextNextAuthorFilterListInput>;
};

type SitePageContextNextTags = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextNextTagsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextNextTagsFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextNextTagsFilterInput>;
};

type SitePageContextPrev = {
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<SitePageContextPrevTags>>>;
  readonly author: Maybe<ReadonlyArray<Maybe<SitePageContextPrevAuthor>>>;
};

type SitePageContextPrevAuthor = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextPrevAuthorFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextPrevAuthorFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextPrevAuthorFilterInput>;
};

type SitePageContextPrevFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<SitePageContextPrevTagsFilterListInput>;
  readonly author: Maybe<SitePageContextPrevAuthorFilterListInput>;
};

type SitePageContextPrevTags = {
  readonly slug: Maybe<Scalars['String']>;
};

type SitePageContextPrevTagsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type SitePageContextPrevTagsFilterListInput = {
  readonly elemMatch: Maybe<SitePageContextPrevTagsFilterInput>;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___limit = 'context.limit',
  context___skip = 'context.skip',
  context___numPages = 'context.numPages',
  context___currentPage = 'context.currentPage',
  context___prev___slug = 'context.prev.slug',
  context___prev___tags = 'context.prev.tags',
  context___prev___tags___slug = 'context.prev.tags.slug',
  context___prev___author = 'context.prev.author',
  context___prev___author___slug = 'context.prev.author.slug',
  context___next___slug = 'context.next.slug',
  context___next___tags = 'context.next.tags',
  context___next___tags___slug = 'context.next.tags.slug',
  context___next___author = 'context.next.author',
  context___next___author___slug = 'context.next.author.slug',
  context___slug = 'context.slug',
  context___primaryTag = 'context.primaryTag',
  context___tag = 'context.tag',
  context___author = 'context.author',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
  pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator.pluginOptions.plugins.nodeAPIs',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
  pluginCreator___pluginOptions___output = 'pluginCreator.pluginOptions.output',
  pluginCreator___pluginOptions___createLinkInHead = 'pluginCreator.pluginOptions.createLinkInHead',
  pluginCreator___pluginOptions___outputPath = 'pluginCreator.pluginOptions.outputPath',
  pluginCreator___pluginOptions___fonts___google = 'pluginCreator.pluginOptions.fonts.google',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator.pluginOptions.defaultQuality',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator.pluginOptions.stripMetadata',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator.pluginOptions.base64Width',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator.pluginOptions.failOnError',
  pluginCreator___pluginOptions___id = 'pluginCreator.pluginOptions.id',
  pluginCreator___pluginOptions___includeInDevelopment = 'pluginCreator.pluginOptions.includeInDevelopment',
  pluginCreator___pluginOptions___defaultDataLayer___type = 'pluginCreator.pluginOptions.defaultDataLayer.type',
  pluginCreator___pluginOptions___routeChangeEventName = 'pluginCreator.pluginOptions.routeChangeEventName',
  pluginCreator___pluginOptions___spaceId = 'pluginCreator.pluginOptions.spaceId',
  pluginCreator___pluginOptions___accessToken = 'pluginCreator.pluginOptions.accessToken',
  pluginCreator___pluginOptions___host = 'pluginCreator.pluginOptions.host',
  pluginCreator___pluginOptions___environment = 'pluginCreator.pluginOptions.environment',
  pluginCreator___pluginOptions___downloadLocal = 'pluginCreator.pluginOptions.downloadLocal',
  pluginCreator___pluginOptions___forceFullSync = 'pluginCreator.pluginOptions.forceFullSync',
  pluginCreator___pluginOptions___pageLimit = 'pluginCreator.pluginOptions.pageLimit',
  pluginCreator___pluginOptions___assetDownloadWorkers = 'pluginCreator.pluginOptions.assetDownloadWorkers',
  pluginCreator___pluginOptions___useNameForId = 'pluginCreator.pluginOptions.useNameForId',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___wrapperStyle = 'pluginCreator.pluginOptions.wrapperStyle',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___quality = 'pluginCreator.pluginOptions.quality',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator.pluginOptions.linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator.pluginOptions.showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator.pluginOptions.markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator.pluginOptions.sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator.pluginOptions.backgroundColor',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator.pluginOptions.withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator.pluginOptions.tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator.pluginOptions.loading',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator.pluginOptions.disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator.pluginOptions.disableBgImage',
  pluginCreator___pluginOptions___background = 'pluginCreator.pluginOptions.background',
  pluginCreator___pluginOptions___siteUrl = 'pluginCreator.pluginOptions.siteUrl',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator.pluginOptions.isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator.pluginOptions.jsxPragma',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator.pluginOptions.allExtensions',
  pluginCreator___pluginOptions___sourceMap = 'pluginCreator.pluginOptions.sourceMap',
  pluginCreator___pluginOptions___autoLabel = 'pluginCreator.pluginOptions.autoLabel',
  pluginCreator___pluginOptions___labelFormat = 'pluginCreator.pluginOptions.labelFormat',
  pluginCreator___pluginOptions___cssPropOptimization = 'pluginCreator.pluginOptions.cssPropOptimization',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions.plugins',
  pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
  pluginOptions___plugins___id = 'pluginOptions.plugins.id',
  pluginOptions___plugins___name = 'pluginOptions.plugins.name',
  pluginOptions___plugins___version = 'pluginOptions.plugins.version',
  pluginOptions___plugins___pluginOptions___wrapperStyle = 'pluginOptions.plugins.pluginOptions.wrapperStyle',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
  pluginOptions___plugins___pluginOptions___quality = 'pluginOptions.plugins.pluginOptions.quality',
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions.plugins.pluginOptions.linkImagesToOriginal',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions.plugins.pluginOptions.showCaptions',
  pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions.plugins.pluginOptions.markdownCaptions',
  pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 'pluginOptions.plugins.pluginOptions.sizeByPixelDensity',
  pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions.plugins.pluginOptions.backgroundColor',
  pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions.plugins.pluginOptions.withWebp',
  pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions.plugins.pluginOptions.tracedSVG',
  pluginOptions___plugins___pluginOptions___loading = 'pluginOptions.plugins.pluginOptions.loading',
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions.plugins.pluginOptions.disableBgImageOnAlpha',
  pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions.plugins.pluginOptions.disableBgImage',
  pluginOptions___plugins___pluginOptions___background = 'pluginOptions.plugins.pluginOptions.background',
  pluginOptions___plugins___nodeAPIs = 'pluginOptions.plugins.nodeAPIs',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___output = 'pluginOptions.output',
  pluginOptions___createLinkInHead = 'pluginOptions.createLinkInHead',
  pluginOptions___outputPath = 'pluginOptions.outputPath',
  pluginOptions___fonts___google = 'pluginOptions.fonts.google',
  pluginOptions___fonts___google___family = 'pluginOptions.fonts.google.family',
  pluginOptions___fonts___google___subsets = 'pluginOptions.fonts.google.subsets',
  pluginOptions___fonts___google___variants = 'pluginOptions.fonts.google.variants',
  pluginOptions___defaultQuality = 'pluginOptions.defaultQuality',
  pluginOptions___stripMetadata = 'pluginOptions.stripMetadata',
  pluginOptions___base64Width = 'pluginOptions.base64Width',
  pluginOptions___failOnError = 'pluginOptions.failOnError',
  pluginOptions___id = 'pluginOptions.id',
  pluginOptions___includeInDevelopment = 'pluginOptions.includeInDevelopment',
  pluginOptions___defaultDataLayer___type = 'pluginOptions.defaultDataLayer.type',
  pluginOptions___defaultDataLayer___value___platform = 'pluginOptions.defaultDataLayer.value.platform',
  pluginOptions___routeChangeEventName = 'pluginOptions.routeChangeEventName',
  pluginOptions___spaceId = 'pluginOptions.spaceId',
  pluginOptions___accessToken = 'pluginOptions.accessToken',
  pluginOptions___host = 'pluginOptions.host',
  pluginOptions___environment = 'pluginOptions.environment',
  pluginOptions___downloadLocal = 'pluginOptions.downloadLocal',
  pluginOptions___forceFullSync = 'pluginOptions.forceFullSync',
  pluginOptions___pageLimit = 'pluginOptions.pageLimit',
  pluginOptions___assetDownloadWorkers = 'pluginOptions.assetDownloadWorkers',
  pluginOptions___useNameForId = 'pluginOptions.useNameForId',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___wrapperStyle = 'pluginOptions.wrapperStyle',
  pluginOptions___maxWidth = 'pluginOptions.maxWidth',
  pluginOptions___quality = 'pluginOptions.quality',
  pluginOptions___linkImagesToOriginal = 'pluginOptions.linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions.showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions.markdownCaptions',
  pluginOptions___sizeByPixelDensity = 'pluginOptions.sizeByPixelDensity',
  pluginOptions___backgroundColor = 'pluginOptions.backgroundColor',
  pluginOptions___withWebp = 'pluginOptions.withWebp',
  pluginOptions___tracedSVG = 'pluginOptions.tracedSVG',
  pluginOptions___loading = 'pluginOptions.loading',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions.disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions.disableBgImage',
  pluginOptions___background = 'pluginOptions.background',
  pluginOptions___siteUrl = 'pluginOptions.siteUrl',
  pluginOptions___isTSX = 'pluginOptions.isTSX',
  pluginOptions___jsxPragma = 'pluginOptions.jsxPragma',
  pluginOptions___allExtensions = 'pluginOptions.allExtensions',
  pluginOptions___sourceMap = 'pluginOptions.sourceMap',
  pluginOptions___autoLabel = 'pluginOptions.autoLabel',
  pluginOptions___labelFormat = 'pluginOptions.labelFormat',
  pluginOptions___cssPropOptimization = 'pluginOptions.cssPropOptimization',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly output: Maybe<Scalars['String']>;
  readonly createLinkInHead: Maybe<Scalars['Boolean']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly fonts: Maybe<SitePluginPluginOptionsFonts>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly id: Maybe<Scalars['String']>;
  readonly includeInDevelopment: Maybe<Scalars['Boolean']>;
  readonly defaultDataLayer: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  readonly routeChangeEventName: Maybe<Scalars['String']>;
  readonly spaceId: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly host: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly downloadLocal: Maybe<Scalars['Boolean']>;
  readonly forceFullSync: Maybe<Scalars['Boolean']>;
  readonly pageLimit: Maybe<Scalars['Int']>;
  readonly assetDownloadWorkers: Maybe<Scalars['Int']>;
  readonly useNameForId: Maybe<Scalars['Boolean']>;
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly background: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsDefaultDataLayer = {
  readonly type: Maybe<Scalars['String']>;
  readonly value: Maybe<SitePluginPluginOptionsDefaultDataLayerValue>;
};

type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<SitePluginPluginOptionsDefaultDataLayerValueFilterInput>;
};

type SitePluginPluginOptionsDefaultDataLayerValue = {
  readonly platform: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsDefaultDataLayerValueFilterInput = {
  readonly platform: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly output: Maybe<StringQueryOperatorInput>;
  readonly createLinkInHead: Maybe<BooleanQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly fonts: Maybe<SitePluginPluginOptionsFontsFilterInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly includeInDevelopment: Maybe<BooleanQueryOperatorInput>;
  readonly defaultDataLayer: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  readonly routeChangeEventName: Maybe<StringQueryOperatorInput>;
  readonly spaceId: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly environment: Maybe<StringQueryOperatorInput>;
  readonly downloadLocal: Maybe<BooleanQueryOperatorInput>;
  readonly forceFullSync: Maybe<BooleanQueryOperatorInput>;
  readonly pageLimit: Maybe<IntQueryOperatorInput>;
  readonly assetDownloadWorkers: Maybe<IntQueryOperatorInput>;
  readonly useNameForId: Maybe<BooleanQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFonts = {
  readonly google: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsFontsGoogle>>>;
};

type SitePluginPluginOptionsFontsFilterInput = {
  readonly google: Maybe<SitePluginPluginOptionsFontsGoogleFilterListInput>;
};

type SitePluginPluginOptionsFontsGoogle = {
  readonly family: Maybe<Scalars['String']>;
  readonly subsets: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly variants: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPluginOptionsFontsGoogleFilterInput = {
  readonly family: Maybe<StringQueryOperatorInput>;
  readonly subsets: Maybe<StringQueryOperatorInput>;
  readonly variants: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsFontsGoogleFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsFontsGoogleFilterInput>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  readonly showCaptions: Maybe<Scalars['Boolean']>;
  readonly markdownCaptions: Maybe<Scalars['Boolean']>;
  readonly sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  readonly backgroundColor: Maybe<Scalars['String']>;
  readonly withWebp: Maybe<Scalars['Boolean']>;
  readonly tracedSVG: Maybe<Scalars['Boolean']>;
  readonly loading: Maybe<Scalars['String']>;
  readonly disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  readonly disableBgImage: Maybe<Scalars['Boolean']>;
  readonly background: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly linkImagesToOriginal: Maybe<BooleanQueryOperatorInput>;
  readonly showCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly markdownCaptions: Maybe<BooleanQueryOperatorInput>;
  readonly sizeByPixelDensity: Maybe<BooleanQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
  readonly withWebp: Maybe<BooleanQueryOperatorInput>;
  readonly tracedSVG: Maybe<BooleanQueryOperatorInput>;
  readonly loading: Maybe<StringQueryOperatorInput>;
  readonly disableBgImageOnAlpha: Maybe<BooleanQueryOperatorInput>;
  readonly disableBgImage: Maybe<BooleanQueryOperatorInput>;
  readonly background: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly siteURL: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly coverImage: Maybe<Scalars['String']>;
  readonly logo: Maybe<Scalars['String']>;
  readonly facebook: Maybe<Scalars['String']>;
  readonly twitter: Maybe<Scalars['String']>;
  readonly showSubscribe: Maybe<Scalars['Boolean']>;
  readonly footer: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly siteURL: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly coverImage: Maybe<StringQueryOperatorInput>;
  readonly logo: Maybe<StringQueryOperatorInput>;
  readonly facebook: Maybe<StringQueryOperatorInput>;
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly showSubscribe: Maybe<BooleanQueryOperatorInput>;
  readonly footer: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type GatsbyContentfulFluid_withWebpFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type homezvrzdevaddictsrctemplatesindexTsx1768937635QueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


type homezvrzdevaddictsrctemplatesindexTsx1768937635Query = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt' | 'featured'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }>, readonly author: Maybe<ReadonlyArray<Maybe<(
          Pick<ContentfulAuthor, 'name' | 'subtitle'>
          & { readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }> }
        )>>> }
      ) }> }, readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }> };

type homezvrzdevaddictsrctemplatespostTsx1038199234QueryVariables = Exact<{
  slug: Maybe<Scalars['String']>;
  primaryTag: Maybe<Scalars['String']>;
}>;


type homezvrzdevaddictsrctemplatespostTsx1038199234Query = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>, readonly fixed: Maybe<Pick<ContentfulFixed, 'src'>> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }>, readonly author: Maybe<ReadonlyArray<Maybe<(
          Pick<ContentfulAuthor, 'name' | 'slug' | 'subtitle'>
          & { readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }> }
        )>>> }
      ) }> }, readonly relatedPosts: (
    Pick<ContentfulPostConnection, 'totalCount'>
    & { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }>, readonly author: Maybe<ReadonlyArray<Maybe<(
          Pick<ContentfulAuthor, 'name' | 'subtitle' | 'slug'>
          & { readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }> }
        )>>> }
      ) }> }
  ) };

type homezvrzdevaddictsrctemplatestagsTsx1814928813QueryVariables = Exact<{
  tag: Maybe<Scalars['String']>;
}>;


type homezvrzdevaddictsrctemplatestagsTsx1814928813Query = { readonly allContentfulTag: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulTag, 'slug' | 'tagName'>
        & { readonly description: Maybe<Pick<ContentfulTagDescription, 'raw'>>, readonly image: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>, readonly fixed: Maybe<Pick<ContentfulFixed, 'src'>> }> }
      ) }> }, readonly allContentfulPost: (
    Pick<ContentfulPostConnection, 'totalCount'>
    & { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }>, readonly author: Maybe<ReadonlyArray<Maybe<(
          Pick<ContentfulAuthor, 'name' | 'subtitle'>
          & { readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }> }
        )>>> }
      ) }> }
  ) };

type homezvrzdevaddictsrctemplatesauthorTsx1308783980QueryVariables = Exact<{
  slug: Maybe<Scalars['String']>;
}>;


type homezvrzdevaddictsrctemplatesauthorTsx1308783980Query = { readonly allContentfulAuthor: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulAuthor, 'name' | 'subtitle' | 'location' | 'social'>
        & { readonly personal_info: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst'>> }>, readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>, readonly fixed: Maybe<Pick<ContentfulFixed, 'src'>> }>, readonly profileImage: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment>, readonly fixed: Maybe<Pick<ContentfulFixed, 'src'>> }> }
      ) }> }, readonly allContentfulPost: (
    Pick<ContentfulPostConnection, 'totalCount'>
    & { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'id' | 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }> }
      ) }> }
  ) };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type homezvrzdevaddictsrcpages404Tsx1578183893QueryVariables = Exact<{ [key: string]: never; }>;


type homezvrzdevaddictsrcpages404Tsx1578183893Query = { readonly allContentfulPost: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<ContentfulPost, 'title' | 'slug' | 'excerpt' | 'updatedAt' | 'featured'>
        & { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<ContentfulTag, 'slug' | 'tagName'>>>>, readonly hero: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }>, readonly body: Maybe<{ readonly childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'htmlAst' | 'timeToRead'>> }>, readonly author: Maybe<ReadonlyArray<Maybe<(
          Pick<ContentfulAuthor, 'name' | 'subtitle'>
          & { readonly avatar: Maybe<{ readonly fluid: Maybe<GatsbyContentfulFluid_withWebpFragment> }> }
        )>>> }
      ) }> } };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author' | 'lang' | 'keywords' | 'siteURL'>> }> };

type GatsbyContentfulFixedFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_tracedSVGFragment = Pick<ContentfulFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulFixed_withWebpFragment = Pick<ContentfulFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFixed_withWebp_noBase64Fragment = Pick<ContentfulFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulFluidFragment = Pick<ContentfulFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_tracedSVGFragment = Pick<ContentfulFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulFluid_withWebp_noBase64Fragment = Pick<ContentfulFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulResolutionsFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_tracedSVGFragment = Pick<ContentfulResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_noBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyContentfulResolutions_withWebpFragment = Pick<ContentfulResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulResolutions_withWebp_noBase64Fragment = Pick<ContentfulResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyContentfulSizesFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_tracedSVGFragment = Pick<ContentfulSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_noBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyContentfulSizes_withWebpFragment = Pick<ContentfulSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyContentfulSizes_withWebp_noBase64Fragment = Pick<ContentfulSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}