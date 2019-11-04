import * as $tea from "@alicloud/tea-typescript";

export default class BaseClient {

  _domain: string
  _authToken: string

  constructor(config: { [key: string]: any }) {
    this._domain = config.domain;
    this._authToken = config.authToken;
  }

  _toJSON(obj: { [key: string]: any }): string {
    return JSON.stringify(obj);
  }

  async _readJSON(a: $tea.Response): Promise<{ [key: string]: any }> {
    const body = await a.readBytes();
    return JSON.parse(body.toString());
  }

  _toQuery(query: { [key: string]: any }): { [key: string]: string } {
    let map : { [key: string]: string } = {};
    Object.keys(query).forEach((key) => {
      map[key] = String(query.key);
    });
    return map;
  }
}
