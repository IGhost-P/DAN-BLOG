import { Hearder } from "components";
import { Fragment } from "react";
export function HomeTemplate() {
  return (
    <Fragment>
      <Hearder />
      <main>
        <div>서치바</div>
        <section>
          <div>카테고리</div>
          <div>인기있는</div>
          <div>최신글</div>
        </section>
      </main>
      <footer>마무리글</footer>
    </Fragment>
  );
}
