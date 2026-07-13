interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === 'www.grasswhisperer.uk') {
      url.hostname = 'grasswhisperer.uk';
      return Promise.resolve(Response.redirect(url, 301));
    }

    return env.ASSETS.fetch(request);
  },
};