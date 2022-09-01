---
title: "Infinite scrolling in React"
date: "2022-10-16"
image: Infinite-scrolling-in-React.png
excerpt: Infinite scrolling is a method of loading other content and adding it to the page when it is scrolled to the bottom area of the page. The ability to show a large amount of content with a single scroll action is advantageous in preventing users from leaving
isFeatured: true
---

# React에서 무한 스크롤 (feat.ObserverAPI)

# 무한 스크롤이란..?

![Untitled](Infinite-scrolling-in-React.png)

무한 스크롤은 페이지 하단 영역까지 스크롤될 경우 다른 컨텐츠를 새롭게 로딩해 페이지에 추가되는 방식입니다. 스크롤 액션 하나로 많은 양의 컨텐츠를 보여줄 수 있어 사용자 이탈을 막을 수 있는 장점이 있습니다.

```jsx
import {
  CourseDescription,
  CourseDescriptionMeMo,
  Loader,
  ObserveBottom,
} from "components";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ICourse } from "types";
import * as S from "./styles";
import React from "react";
import { COUNT } from "constants/index";

interface ICoursesContainProps {
  courses: ICourse[];
  setPage: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
  stopObserving: boolean;
}

/**
 * CourseContainer 컴포넌트
 *
 * course 에따라 course 목록을 보여주는 컴포넌트
 *
 * @param course course 정보
 * @param setPage 페이지 정보를 업데이트하는 함수
 * @param isLoading 로딩 여부
 * @param stopObserving 관찰 여부 (관찰을 통해 무한스크롤 처리)
 */

export function CourseContainer({
  courses,
  setPage,
  isLoading,
  stopObserving,
}: ICoursesContainProps) {
  /**
   * State
   *
   * 1.bottom : 마지막 컨텐츠의 div를 뜻한다
   */
  const [bottom, setBottom] = (useState < HTMLDivElement) | (null > null);
  const bottomObserver = useRef < any > null;

  /**
   * bottom observer 가 변경될 때마다 실행된다
   * 관찰을 통해 다름 page로 update한다, 이를 통해 부모 컴포넌트의 courses가 update됨
   */

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          setPage((page: number) => page + 1);
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
    );
    bottomObserver.current = observer;
  }, []);

  /**
   * bottom observer 에 대한 관찰을 시작한다
   */
  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  // courses가 하나 일떄
  if (courses.length === 1) {
    return (
      <S.Container>
        <CourseDescription key={courses[0].id} course={courses[0]} />
        {isLoading && (
          <ObserveBottom>
            <Loader />
          </ObserveBottom>
        )}
      </S.Container>
    );
  }

  // courses가 count 미만일떄

  if (courses.length < COUNT) {
    return (
      <S.Container>
        {courses.map((course) => (
          <CourseDescription key={course.id} course={course} />
        ))}
        {isLoading && (
          <ObserveBottom>
            <Loader />
          </ObserveBottom>
        )}
      </S.Container>
    );
  }

  // courses가 count 이상일떄

  return (
    <S.Container>
      {courses.length >= COUNT &&
        courses?.map((course, idx) => (
          <CourseDescriptionMeMo key={course.id} course={course} />
        ))}

      {isLoading && (
        <ObserveBottom>
          <Loader />
        </ObserveBottom>
      )}
      {!isLoading && !stopObserving && (
        <div
          ref={setBottom}
          style={{
            width: "100vw",
            marginTop: "50px",
            height: "10vh",
            position: "relative",
          }}
        />
      )}
    </S.Container>
  );
}
export const CourseContainerMeMo = React.memo(CourseContainer);
```

원리는 이렇다

1. 첫 랜더링시에 observer 객체를 생성한다
2. 리스트의 맨 마지막 div에 setState를 달아준다. 이렇게 되면 맨 마지막 div가 state로 저장이 된다, 이렇게 되면 맨 처음 랜더링시에 마지막 div가 bottom에 저장되고, bottom이 true이기때문에 해당 bottom에 observer객체가 observe(관찰하게 된다)하게 된다
3. 마지막 ObserverAPI에 의해 교차 상태가 된다면 콜백함수를 실행시키고 , isLoding이 true가 되면서 div가 unmount가 되며 클린업 함수로 인해 div의 observe는 사라진다
4. 이후 isLoading이 끝나고 다시 div가 랜더링 되며, bottom 값이 업데이트 되고, bottom을 의존성 배열에 담고 있는 useEffect때문에 새롭게 생긴 마지막 div에 observe객체가 observer를 하게된다, 이렇게 2→4번을 반복하는게 무한 스크롤이다.

![Untitled](untitled1.png)

이제 observe 될때마다 콜백함수가 실행이 되어서, page가 업데이트 되고, page가 업데이트 될때마다 list를 새로 받아와 사용하면 되는것이다

![Untitled](untitled2.png)

추가적으로 해주면 좋은것은 React.memo이다, list는 새로운 배열이기 때문에 매번 새로 랜더링 해야하는데 list중 item에 해당 하는 컴포넌트는 각각 자신의 props가 변경이 되지 않으면 재랜더링을 하지 않도록 방지하는 것이 React.memo이다.

```jsx
import { CourseUser, CourseImg, Text } from "components";
import { COLOR_TWO_MAIN } from "constants/index";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ICourse } from "types";
import comma from "utils/comma";
import * as S from "./styles";

/**
 * CourseDescription 컴포넌트
 *
 * course의 내용을 보여주는 컴포넌트
 * React.memo를 통해 리랜더링을 방지 했다 (key 값을 uuidv4를 이용하려 했으나, props 변경으로 인해 리랜더링이 발생하여 사용하지 않음)
 *
 *
 * @param course course 정보 <ICourse>
 * @returns
 */

export function CourseDescription({ course }: { course: ICourse }) {
  let navigate = useNavigate();

  if (!course) return null;

  const { id, title, instructorName, price, coverImageUrl } = course;

  // 코스 상세 페이지로 이동하는 함수
  const onClick = () => {
    navigate(`/api/courses/${id}`);
  };

  return (
    <S.Container onClick={onClick}>
      <CourseImg src={coverImageUrl} alt={instructorName} />
      <Text text={title} fontSize="16px" />
      <S.CourseContainer>
        <S.UserContainer>
          <CourseUser instructorName={instructorName} />
          <Text text={instructorName} fontSize="12px" isSub={true} />
        </S.UserContainer>
        <Text
          text={comma(price)}
          fontSize="12px"
          isSub={true}
          color={COLOR_TWO_MAIN}
        />
      </S.CourseContainer>
    </S.Container>
  );
}
export const CourseDescriptionMeMo = React.memo(CourseDescription);
```

이렇게 하면 새롭게 들어온 item들만 랜더링 된다.(추가적으로 uuidv4를 사용하면 key값이 매번 랜덤값이 되기 때문에 의미가 없어지니 조심하자)

![Untitled](untitled.gif)
