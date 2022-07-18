import { render, screen } from '@testing-library/react';
import {
  GetStaticPropsContext,
  GetStaticPathsContext,
  GetStaticPathsResult,
} from 'next';
import { ParsedUrlQuery, parse } from 'querystring';

import { useRouter } from 'next/router';
import { getPrismicClient } from '../../services/prismic';
import Post, { getStaticProps, getStaticPaths } from '../../pages/post/[slug]';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: Record<string, unknown>[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

interface GetStaticPropsResult {
  props: PostProps;
}
jest.mock('@prismicio/client');
jest.mock('../../services/prismic');
jest.mock('next/router');
const mockedUseRouter = useRouter as jest.Mock;
const mockedPrismic = getPrismicClient as jest.Mock;

describe('Post', () => {
  beforeAll(() => {
    mockedUseRouter.mockReturnValue({
      isFallback: false,
    });
  });

  it('should be able to return prismic posts documents paths using getStaticPaths', async () => {
    console.log('test');
  });

  it('should be able to return prismic post document using getStaticProps', async () => {
    console.log('test');
  });

  it('should be able to render post document info', () => {
    console.log('test');
  });

  it('should be able to render loading message if fallback', () => {
    console.log('test');
  });
});
