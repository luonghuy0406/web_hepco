import React, { Suspense } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import MainLayout from "./layouts/main/MainLayout";
import LoadingPage from "./pages/LoadingPage";

// Lazy load the pages
const MainLayout = React.lazy(() => import("./layouts/main/MainLayout"));
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Question = React.lazy(() => import("./pages/Question"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Post = React.lazy(() => import("./pages/Post"));
const PostItem = React.lazy(() => import("./sections/Posts/PostItem"));

export default function Router({data}) {
  const { t } = useTranslation();

  const routes = useRoutes([
    {
      path: "/",
      element: <>
        <MainLayout />
        {/* <Outlet />
        <Footer/> */}
      </>
      
      ,
      children: [
        {
          path: "",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Home/>
            </Suspense>
          ),
        },
        {
          path: t("gioithieu"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About/>
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("sodo")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("sodo")}/>
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("chucnang")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("chucnang")} />
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("thanhtuu")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("thanhtuu")} />
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("nangluc")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("nangluc")} />
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("thuvien")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("thuvien")} />
            </Suspense>
          ),
        },
        {
          path: `${t("gioithieu")}/${t("thuvien")}/:threadId`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <About page={t("album")} />
            </Suspense>
          ),
        },
        {
          path: t("dichvu"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: `${t("dichvu")}/${t("nguyhai")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("nguyhai")} />
            </Suspense>
          ),
        },
        {
          path: `${t("dichvu")}/${t("cokhi-xaydung")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("cokhi-xaydung")} />
            </Suspense>
          ),
        },
        {
          path: `${t("dichvu")}/${t("thoatnuoc-chieusang")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("thoatnuoc-chieusang")} />
            </Suspense>
          ),
        },
        {
          path: `${t("dichvu")}/${t("quantrang")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("quantrang")} />
            </Suspense>
          ),
        },
        {
          path: `${t("dichvu")}/${t("kinhdoanhkhac")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Services page={t("kinhdoanhkhac")} />
            </Suspense>
          ),
        },

        {
          path: t("cauhoi"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Question />
            </Suspense>
          ),
        },
        {
          path: t("lienhe"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Contact />
            </Suspense>
          ),
        },

        {
          path: t("tintuc"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"post"} page={"0"} />
            </Suspense>
          ),
        },
        {
          path: `${t("tintuc")}/${t("hoatdong")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"post"} page={"1"} />
            </Suspense>
          ),
        },
        {
          path: `${t("tintuc")}/${t("dangdoan")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"post"} page={"2"} />
            </Suspense>
          ),
        },
        {
          path: `${t("tintuc")}/${t("phapluat")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"post"} page={"3"} />
            </Suspense>
          ),
        },
        {
          path: `${t("tintuc")}/${t("tinkhac")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"post"} page={"4"} />
            </Suspense>
          ),
        },
        {
          path: `${t("tintuc")}/:threadId`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <PostItem typePost={"post"} />
            </Suspense>
          ),
        },

        {
          path: t("codong"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"shareholder"} page={"0"} />
            </Suspense>
          ),
        },
        {
          path: `${t("codong")}/${t("thongbao")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"shareholder"} page={"5"} />
            </Suspense>
          ),
        },
        {
          path: `${t("codong")}/${t("baocao")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"shareholder"} page={"6"} />
            </Suspense>
          ),
        },
        {
          path: `${t("codong")}/:threadId`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <PostItem typePost={"shareholder"} />
            </Suspense>
          ),
        },
        {
          path: t("duan"),
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"project"} page={"0"} />
            </Suspense>
          ),
        },
        {
          path: `${t("duan")}/${t("dautu")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"project"} page={"7"} />
            </Suspense>
          ),
        },
        {
          path: `${t("duan")}/${t("trongnuoc")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"project"} page={"8"} />
            </Suspense>
          ),
        },
        {
          path: `${t("duan")}/${t("nuocngoai")}`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Post typePost={"project"} page={"9"} />
            </Suspense>
          ),
        },
        {
          path: `${t("duan")}/:threadId`,
          element: (
            <Suspense fallback={<LoadingPage />}>
              <PostItem typePost={"project"} />
            </Suspense>
          ),
        },

        // Handle 404 and unknown routes
        { path: "404", element: <Navigate to="/" /> },
        { path: "*", element: <Navigate to="/" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <Suspense fallback={<LoadingPage />}>{routes}</Suspense>;
}
