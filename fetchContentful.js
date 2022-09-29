const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require("contentful").createClient({
  space: space,
  accessToken: accessToken,
});
export async function fetchHomePageContent() {
  const entry = await client.getEntry("1odRcAB6FhDDT3TjiJ8HmP");

  return {
    tagLine: entry.fields.tagLine,
    aboutMe: entry.fields.aboutMe,
    CTA: entry.fields.cta,
    portfolioPictureURL: entry.fields.portfolioPicture.fields.file.url,
    src: entry.fields.portfolioPicture.fields.file.url,
    id: entry.sys.id,
  };
}

export async function fetchPortfolioPageContent() {
  const entry = await client.getEntry("69lvZEULtT6EtHQM9nN3Ok");
  return {
    src: entry.fields.portfolioPicture.fields.file.url,
    alt: entry.fields.name,
    title: entry.fields.title,
    description: entry.fields.description,
    id: entry.sys.id,
  };
}

export async function fetchProjects() {
  const entries = await client.getEntries({ content_type: "project" });
  console.log("ENTRIES", entries.items);
  const projects = entries.items.map((project) => {
    return {
      title: project.fields.title,
      projectScreenshot: project.fields.projectScreenshot.fields.file.url,
      id: project.sys.id,
      description: project.fields.description,
      link: project.fields.visitWebsite,
    };
  });

  return projects;
}

export async function fetchProjectById(id) {
  const entry = await client.getEntry(id);

  return {
    title: entry.fields.title,
    projectBackground: entry.fields.projectBackground,
    technologies: entry.fields.technologies,
    heroProjectScreenshot: entry.fields.heroProjectScreenshot.fields.file.url,
    description: entry.fields.description,
    previewImg: entry.fields.staticPreview[0].fields.file.url,
    previewImage: entry.fields.staticPreview[1].fields.file.url,
    link: entry.fields.visitWebsite,
  };
}
