export async function onRequest(context: any, next: any) {
  const url = new URL(context.request.url);
  const hostname = url.hostname;

  if (hostname === 'mysticnorth.ca' || hostname === 'www.mysticnorth.ca') {
    return Response.redirect('https://mysticnorthsound.ca' + url.pathname + url.search, 301);
  }
  if (hostname === 'www.mysticnorthsound.ca') {
    return Response.redirect('https://mysticnorthsound.ca' + url.pathname + url.search, 301);
  }

  return next();
}
