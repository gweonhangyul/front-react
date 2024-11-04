import React from "react";
import "../assets/css/MainPage.css";

function MainPage() {
  const recipes = [
    {
      id: 1,
      title: "피자",
      description: "간편한 조리 방식으로 만드는 피자",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA4MjRfMjAy%2FMDAxNzI0NDc5NzkxNjMx.iy-u9uHvW4ZSR0WfBNkpyTmxWWanwmAnMnH0a2HVxd0g.jLf4V0MCNBewJRyWXpXgTfM7lPM9veg2Kwdan4q0C0Eg.PNG%2F1000051021.png&type=a340",
    },
    {
      id: 2,
      title: "빵 피자",
      description: "집에 있는 재료로 간단하게 만들어 먹을 수 있는 피자",
      imageUrl:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjBfOSAg%2FMDAxNTA1ODYwNTA4MDQy.r1BzNsS1wPynSNIB0lSp6liz8SjaFKUjzVWI8wr4Qmwg.fj0JEmqRerrSNIQVbwuFA2qqSd5FSWMkPrk-qwGZLhgg.JPEG.leerea1004%2FP20170919_191010199_49CF8523-F55B-4B78-A6A5-30A16CEF2AAC.jpg&type=a340",
    },
  ];

  return (
    <div className="recipe-container">
      <div className="main-page">
        {/* 레시피 카드 */}
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card" style={{width:"340px", marginBottom : "10px"}}>
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                style={{height:"300px", width:"300px"}}
                className="recipe-image"
              />
              <div className="recipe-info">
                <h3 className="recipe-title">{recipe.title}</h3>
                <p className="recipe-description">{recipe.description}</p>
              </div>
              <div className="related-youtube">
                <p>Relation YouTube</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
