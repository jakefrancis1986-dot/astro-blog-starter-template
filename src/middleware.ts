export const onRequest = async (context: any, next: any) => {
  const url = new URL(context.request.url);
  const host = url.hostname;

  // If someone comes via mysticnorth.ca, send them to mysticnorthsound.ca
  if (host === 'mysticnorth.ca' || host === 'www.mysticnorth.ca') {
    url.hostname = 'mysticnorthsound.ca';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  // Also force www.mysticnorthsound.ca -> mysticnorthsound.ca (clean)
  if (host === 'www.mysticnorthsound.ca') {
    url.hostname = 'mysticnorthsound.ca';
    return Response.redirect(url.toString(), 301);
  }

  return next();
};
