# react-resume-boilerplate

## What is it?
react-resume-boilerplate is a way to jump start writing your resume and cover letter in HTML and CSS. It takes a [JSON Resume](https://jsonresume.org/) as an input and renders it to an HTML resume. It supports hot module replacement, so your changes to source will be updated immediately on the client.

## What is it not?
react-resume-boilerplate is **not** intended to be a resume template. Rather, it is a starting point for you to be able to get granular control over creating your own resume design.

## How do I use it?

### Prerequisites
To use react-resume-boilerplate, you should know, or expect to learn:

* [React](http://facebook.github.io/react/)
* [CSS Modules](https://github.com/css-modules/css-modules)
* [NPM](https://nodejs.org/en/)

There are other dependencies in this boilerplate, but for basic content and markup changes, that's the minimum requirement.

### Installation and running
Clone the repo, then install with ``npm install``. You can start the dev server with ``npm start``.

### Filestructure
Each level in the React component tree has its own directory. The component in each level is denoted with index.js. These components each have their own styles, found in styles.css in the same directory.

```
.
├── dist                           # Contains outputs from build and pdf scripts
└── src
    ├── App                        # Contains all markup elements
    │   ├── CoverLetter
    │   ├── fonts                  # Contains custom fonts (.ttf, otf, etc.)         
    │   ├── Resume
    │   └── styles.css             # Contains HTML tag level CSS
    └── shared                     # Contains elements shared between multiple files
        ├── content
        │   ├── resume.json        # JSON Resume
        │   └── coverLetter.json   # JSON Cover letter (not a standard format)
        └── Header                 # Header shared between Resume and CoverLetter
```

### Rendering
While the dev server is running, the resume/cover letter can be rendered to PDF with ``npm run pdf``. This the output is saved to ./dist/:companyName, where companyName is defined in coverLetter.json. The resume can also be built into a self-contained javascript file with ``npm run build``. The output is saved to ./dist/:companyName/bundle.js with resource files saved in the same directory.

## Best practices

### Customization
Resumes should be customized for each employer. However, there are typically a lot of similarities across customized resumes, so the typical advice is to have a 'master copy' resume and pick and choose content from the master copy when making customized resumes. This is a great use case for... git branches!

I suggest that at the very least, you use a branch for each company you apply to. You may want more granularity though:

* If you're applying to several categories of jobs, you may want to have a branch for each job category.
* If you're applying to more than one role at a single company, you may also want to have a branch for each role at that company.

### Separation of markup and content
Rather than manage resume.json and coverLetter.json in the same repo as the markup, I have them separated into content and markup repos. This means that I can change markup freely without having to merge across branches for each company/position/etc.

### Generate JSON files
Resume and CoverLetter only expect to read JS objects in the proper schema. That doesn't mean that you have to write your resume or cover letter in JSON! I suggest you find a way you're comfortable with writing your resume and cover letter, then transform your input into JSON/JS Objects.

## Roadmap
* Currently this boilerplate does not support static HTML rendering.
* The self-contained javascript file includes routes, so it must be used at the top level of a domain and will include both the resume and cover letter.