type IntroScreenProps = {
  onContinue: () => void;
};

export function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <section className="screen intro-screen">
      <p className="eyebrow">진단 안내</p>
      <h1>정답보다, 평소 더 먹고 싶은 쪽을 골라주세요.</h1>
      <div className="notice-list">
        <article>
          <strong>찰기</strong>
          <span>밥알끼리 붙는 정도를 말해요.</span>
        </article>
        <article>
          <strong>부드러움</strong>
          <span>잘 익은 밥알을 씹을 때 눌리는 데 필요한 힘이에요.</span>
        </article>
        <article>
          <strong>외관 이미지</strong>
          <span>차이를 설명하기 위한 통제된 예시이며, 이미지 없이도 선택할 수 있어요.</span>
        </article>
      </div>
      <button className="primary-button" type="button" onClick={onContinue}>
        시작하기
      </button>
    </section>
  );
}
