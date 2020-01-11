// This file is auto-generated, don't edit it
import YuqueUtil from '@ali/yuque-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class Config extends $tea.Model {
  authToken: string;
  domain: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'authToken',
      domain: 'domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      domain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HelloResponse extends $tea.Model {
  data: Hello;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Hello,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Hello extends $tea.Model {
  message: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class User extends $tea.Model {
  id: number;
  type: string;
  login: string;
  name: string;
  description: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
      login: 'login',
      name: 'name',
      description: 'description',
      avatarUrl: 'avatar_url',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
      login: 'string',
      name: 'string',
      description: 'string',
      avatarUrl: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserResponse extends $tea.Model {
  data: User;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: User,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Group extends $tea.Model {
  id?: string;
  login: string;
  name: string;
  avatarUrl?: string;
  ownerId: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      login: 'login',
      name: 'name',
      avatarUrl: 'avatar_url',
      ownerId: 'owner_id',
      description: 'description',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      login: 'string',
      name: 'string',
      avatarUrl: 'string',
      ownerId: 'string',
      description: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupsResponse extends $tea.Model {
  data: Group[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Group },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UsersResponse extends $tea.Model {
  data: User[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': User },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupResponse extends $tea.Model {
  data: Group;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Group,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupDetailResponse extends $tea.Model {
  abilities: GroupDetailResponseAbilities;
  data: Group[];
  static names(): { [key: string]: string } {
    return {
      abilities: 'abilities',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abilities: GroupDetailResponseAbilities,
      data: { 'type': 'array', 'itemType': Group },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUser extends $tea.Model {
  id: number;
  groupId: number;
  userId: number;
  role: number;
  user: User;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      groupId: 'group_id',
      userId: 'user_id',
      role: 'role',
      user: 'user',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      groupId: 'number',
      userId: 'number',
      role: 'number',
      user: User,
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUsersResponse extends $tea.Model {
  data: GroupUser[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GroupUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupUserResponse extends $tea.Model {
  data: GroupUser;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GroupUser,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Book extends $tea.Model {
  id: number;
  type: string;
  slug: string;
  name: string;
  namespace: string;
  userId: number;
  user: User;
  description: string;
  creatorId: number;
  public: number;
  likesCount: number;
  watchesCount: number;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      type: 'type',
      slug: 'slug',
      name: 'name',
      namespace: 'namespace',
      userId: 'user_id',
      user: 'user',
      description: 'description',
      creatorId: 'creator_id',
      public: 'public',
      likesCount: 'likes_count',
      watchesCount: 'watches_count',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      type: 'string',
      slug: 'string',
      name: 'string',
      namespace: 'string',
      userId: 'number',
      user: User,
      description: 'string',
      creatorId: 'number',
      public: 'number',
      likesCount: 'number',
      watchesCount: 'number',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BooksResponse extends $tea.Model {
  data: Book[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Book },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookResponse extends $tea.Model {
  data: Book;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Book,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookToc extends $tea.Model {
  title: string;
  slug: string;
  depth: number;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      slug: 'slug',
      depth: 'depth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      slug: 'string',
      depth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookTocsResponse extends $tea.Model {
  data: BookToc[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': BookToc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchQuery extends $tea.Model {
  query: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Doc extends $tea.Model {
  id: number;
  slug: string;
  title: string;
  bookId: number;
  book: Book;
  userId: number;
  user: User;
  format: string;
  body: string;
  bodyDraft: string;
  bodyHtml: string;
  bodyLake: string;
  creatorId: number;
  public: number;
  status: number;
  likesCount: number;
  commentsCount: number;
  contentUpdatedAt: string;
  deletedAt: string;
  createdAt: string;
  updatedAt: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      slug: 'slug',
      title: 'title',
      bookId: 'book_id',
      book: 'book',
      userId: 'user_id',
      user: 'user',
      format: 'format',
      body: 'body',
      bodyDraft: 'body_draft',
      bodyHtml: 'body_html',
      bodyLake: 'body_lake',
      creatorId: 'creator_id',
      public: 'public',
      status: 'status',
      likesCount: 'likes_count',
      commentsCount: 'comments_count',
      contentUpdatedAt: 'content_updated_at',
      deletedAt: 'deleted_at',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      slug: 'string',
      title: 'string',
      bookId: 'number',
      book: Book,
      userId: 'number',
      user: User,
      format: 'string',
      body: 'string',
      bodyDraft: 'string',
      bodyHtml: 'string',
      bodyLake: 'string',
      creatorId: 'number',
      public: 'number',
      status: 'number',
      likesCount: 'number',
      commentsCount: 'number',
      contentUpdatedAt: 'string',
      deletedAt: 'string',
      createdAt: 'string',
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocsResponse extends $tea.Model {
  data: Doc[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Doc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocResponse extends $tea.Model {
  data: Doc;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: Doc,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GroupDetailResponseAbilitiesGroupUser extends $tea.Model {
  create: boolean;
  update: boolean;
  destroy: boolean;
  static names(): { [key: string]: string } {
    return {
      create: 'create',
      update: 'update',
      destroy: 'destroy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'boolean',
      update: 'boolean',
      destroy: 'boolean',
    };
  }

  constructor(map: { [key: string]: any }) {
    super(map);
  }

}

export class GroupDetailResponseAbilitiesRepo extends $tea.Model {
  create: boolean;
  update: boolean;
  destroy: boolean;
  static names(): { [key: string]: string } {
    return {
      create: 'create',
      update: 'update',
      destroy: 'destroy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      create: 'boolean',
      update: 'boolean',
      destroy: 'boolean',
    };
  }

  constructor(map: { [key: string]: any }) {
    super(map);
  }

}

export class GroupDetailResponseAbilities extends $tea.Model {
  read: boolean;
  update: boolean;
  destroy: boolean;
  groupUser: GroupDetailResponseAbilitiesGroupUser;
  repo: GroupDetailResponseAbilitiesRepo;
  static names(): { [key: string]: string } {
    return {
      read: 'read',
      update: 'update',
      destroy: 'destroy',
      groupUser: 'group_user',
      repo: 'repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      read: 'boolean',
      update: 'boolean',
      destroy: 'boolean',
      groupUser: GroupDetailResponseAbilitiesGroupUser,
      repo: GroupDetailResponseAbilitiesRepo,
    };
  }

  constructor(map: { [key: string]: any }) {
    super(map);
  }

}


export default class Client {
  _domain: string;
  _authToken: string;

  constructor(config: Config) {
    this._authToken = config.authToken;
    this._domain = config.domain;
  }

  async get(path: string, params: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    request_.protocol = "https";
    request_.method = "GET";
    request_.pathname = `/api/v2${path}`;
    request_.query = await YuqueUtil.toQuery({
      ...params,
    });
    request_.headers = {
      host: this._domain,
      'x-auth-token': this._authToken,
      'user-agent': "tea/nodejs",
    };
    let response_ = await $tea.doAction(request_);

    let result = await YuqueUtil.readJSON(response_);
    return result;
  }

  async post(path: string, data: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    request_.method = "POST";
    request_.pathname = `/api/v2${path}`;
    request_.headers = {
      host: this._domain,
      'x-auth-token': this._authToken,
      'user-agent': "tea/nodejs",
    };
    request_.body = new $tea.BytesReadable(await YuqueUtil.toJSONString(data));
    let response_ = await $tea.doAction(request_);

    let result = await YuqueUtil.readJSON(response_);
    return result;
  }

  async put(path: string, data: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    request_.method = "PUT";
    request_.pathname = `/api/v2${path}`;
    request_.headers = {
      host: this._domain,
      'x-auth-token': this._authToken,
      'user-agent': "tea/nodejs",
    };
    request_.body = new $tea.BytesReadable(await YuqueUtil.toJSONString(data));
    let response_ = await $tea.doAction(request_);

    let result = await YuqueUtil.readJSON(response_);
    return result;
  }

  async destroy(path: string, data: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $tea.Request();
    request_.method = "DELETE";
    request_.pathname = `/api/v2${path}`;
    request_.headers = {
      host: this._domain,
      'x-auth-token': this._authToken,
      'user-agent': "tea/nodejs",
    };
    request_.body = new $tea.BytesReadable(await YuqueUtil.toJSONString(data));
    let response_ = await $tea.doAction(request_);

    let result = await YuqueUtil.readJSON(response_);
    return result;
  }

  async hello(): Promise<HelloResponse> {
    return $tea.cast<HelloResponse>(await this.get("/hello", { }), new HelloResponse({}));
  }

  async getUserById(login: string): Promise<UserResponse> {
    return $tea.cast<UserResponse>(await this.get(`/users/${login}`, { }), new UserResponse({}));
  }

  async getUser(): Promise<UserResponse> {
    return $tea.cast<UserResponse>(await this.get(`/user`, { }), new UserResponse({}));
  }

  async getGroupsByUser(login: string): Promise<GroupsResponse> {
    return $tea.cast<GroupsResponse>(await this.get(`/users/${login}/groups`, { }), new GroupsResponse({}));
  }

  async getGroups(): Promise<UsersResponse> {
    return $tea.cast<UsersResponse>(await this.get(`/groups`, { }), new UsersResponse({}));
  }

  async createGroup(group: Group): Promise<GroupResponse> {
    return $tea.cast<GroupResponse>(await this.post(`/groups`, $tea.toMap(group)), new GroupResponse({}));
  }

  async getGroup(groupid: string): Promise<GroupDetailResponse> {
    return $tea.cast<GroupDetailResponse>(await this.get(`/groups/${groupid}`, { }), new GroupDetailResponse({}));
  }

  async updateGroup(groupid: string, params: {[key: string]: any}): Promise<GroupResponse> {
    return $tea.cast<GroupResponse>(await this.put(`/groups/${groupid}`, params), new GroupResponse({}));
  }

  async destryGroup(groupid: string): Promise<{[key: string]: any}> {
    return await this.destroy(`/groups/${groupid}`, { });
  }

  async getGroupMembers(groupid: string): Promise<GroupUsersResponse> {
    return $tea.cast<GroupUsersResponse>(await this.get(`/groups/${groupid}/users`, { }), new GroupUsersResponse({}));
  }

  async updateGroupMember(groupid: string, userid: string, params: {[key: string]: any}): Promise<GroupUserResponse> {
    return $tea.cast<GroupUserResponse>(await this.put(`/groups/${groupid}/users/${userid}`, params), new GroupUserResponse({}));
  }

  async destroyGroupMember(groupid: string, userid: string): Promise<{[key: string]: any}> {
    return await this.destroy(`/groups/${groupid}/users/${userid}`, { });
  }

  async getBooksByUser(userid: string, params: {[key: string]: any}): Promise<BooksResponse> {
    return $tea.cast<BooksResponse>(await this.get(`/users/${userid}/repos`, params), new BooksResponse({}));
  }

  async createBook(userid: string, params: {[key: string]: any}): Promise<BooksResponse> {
    return $tea.cast<BooksResponse>(await this.post(`/groups/${userid}/repos`, params), new BooksResponse({}));
  }

  async getBook(namespace: string): Promise<BookResponse> {
    return $tea.cast<BookResponse>(await this.get(`/repos/${namespace}`, { }), new BookResponse({}));
  }

  async updateBook(namespace: string, params: {[key: string]: any}): Promise<BookResponse> {
    return $tea.cast<BookResponse>(await this.put(`/repos/${namespace}`, params), new BookResponse({}));
  }

  async destroyBook(namespace: string): Promise<{[key: string]: any}> {
    return await this.destroy(`/repos/${namespace}`, { });
  }

  async getBookToc(namespace: string): Promise<BookTocsResponse> {
    return $tea.cast<BookTocsResponse>(await this.get(`/repos/${namespace}/toc`, { }), new BookTocsResponse({}));
  }

  async searchBook(params: SearchQuery): Promise<BooksResponse> {
    return $tea.cast<BooksResponse>(await this.get(`/search/repos`, $tea.toMap(params)), new BooksResponse({}));
  }

  async getDocs(namespace: string): Promise<DocsResponse> {
    return $tea.cast<DocsResponse>(await this.get(`/repos/${namespace}/docs`, { }), new DocsResponse({}));
  }

  async getDoc(namespace: string, slug: string): Promise<DocResponse> {
    return $tea.cast<DocResponse>(await this.get(`/repos/${namespace}/docs/${slug}`, { }), new DocResponse({}));
  }

  async createDoc(namespace: string, params: {[key: string]: any}): Promise<DocResponse> {
    return $tea.cast<DocResponse>(await this.post(`/repos/${namespace}/docs`, params), new DocResponse({}));
  }

  async updateDoc(namespace: string, slug: string, params: {[key: string]: any}): Promise<DocResponse> {
    return $tea.cast<DocResponse>(await this.put(`/repos/${namespace}/docs/${slug}`, params), new DocResponse({}));
  }

  async destroyDoc(namespace: string, slug: string): Promise<{[key: string]: any}> {
    return await this.destroy(`/repos/${namespace}/docs/${slug}`, { });
  }

}
