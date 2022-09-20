const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});
export async function fetchHomePageContent() {
  const entry = await client.getEntry("1odRcAB6FhDDT3TjiJ8HmP");

  //   console.log("entry", entry.fields.projectScreenshot);

  return {
    tagLine: entry.fields.tagLine,
    aboutMe: entry.fields.aboutMe,
    CTA: entry.fields.cta,
    portfolioPictureURL: entry.fields.portfolioPicture.fields.file.url,
    src: entry.fields.portfolioPicture.fields.file.url,
  };
}

export async function fetchPortfolioPageContent() {
  const entry = await client.getEntry("69lvZEULtT6EtHQM9nN3Ok");

  return {
    src: entry.fields.portfolioPicture.fields.file.url,
    alt: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
  };
}

export async function fetchProjects() {
  const entries = await client.getEntries({ content_type: "project" });

  const projects = entries.items.map((project) => {
    return {
      title: project.fields.title,
      projectScreenshot: project.fields.projectScreenshot.fields.file.url,
      id: project.sys.id,
    };
  });

  return projects;
}
