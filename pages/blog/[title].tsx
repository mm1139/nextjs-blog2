import { GetStaticPaths, GetStaticProps } from 'next';
import * as path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Formata {
  source: MDXRemoteSerializeResult;
  data: any; //TODO
}

interface PostData {
  title: string;
  data: string;
}

// const components = { Test };

export default function Post({ source, data }: Formata) {
  return (
    <>
      <pre>
        <h1>{data.title}</h1>
        <MDXRemote {...source} />
      </pre>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const response = await fetch('http://localhost:4001/persons');
  // const persons:Person[] = await response.json();

  // const paths = persons.map(
  //     (person) =>{
  //         return {
  //             params:{ id:person.id.toString() }
  //         };
  // });

  return {
    fallback: false,
    // paths: [
    //   {
    //     params: { title: 'react' },
    //   },
    //   {
    //     params: { title: 'hello' },
    //   },
    //   {
    //     params: { title: '投稿3' },
    //   },
    // ],
    paths: getPostAll().map((m) => ({
      params: {
        title: m.data.title,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { title } }) => {
  console.log('_getStaticProps_');
  const { content, data } = getPostAll().find((m) => m.data.title === title);
  const source = await serialize(content, { scope: data });
  return {
    props: { source, data },
  };
};

const blogDirPaths = path.join('pages', '_posts');
function getPostAll() {
  // console.log('_getPostAll_');

  // const test = fs.readdirSync(blogDirPaths, { withFileTypes: true });
  // console.log(test);
  // const test2 = test.filter((directory) => directory.isFile());
  // console.log(test2);
  // const test3 = test2.flatMap((directory) => {
  //   const dirPath = path.join(blogDirPaths, directory.name);
  //   return fs.readFileSync(dirPath);
  // });
  // console.log(test3);
  // const test4 = test3.map((f) => {
  //   const { orig, ...post } = matter(f);
  //   return post;
  // });
  // console.log(test4);

  return (
    fs
      .readdirSync(blogDirPaths, { withFileTypes: true })
      //.filter((directory) => directory.isDirectory())
      .filter((directory) => directory.isFile())
      .flatMap((directory) => {
        const dirPath = path.join(blogDirPaths, directory.name);
        return fs.readFileSync(dirPath);
      })
      .map((f) => {
        const { orig, ...post } = matter(f);
        return post;
      })
  );
}
