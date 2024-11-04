import React, { useState } from "react";
import "../assets/css/SearchPage.css"; // SearchPage 스타일 파일

function SearchPage() {
  const [isIngredientModalOpen, setIngredientModalOpen] = useState(false);
  const [isMethodModalOpen, setMethodModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const recipes = [
    {
      id: 1,
      title: "돼지고기 볶음",
      ingredients: ["돼지고기"],
      method: "볶음",
      description: "맛있는 돼지고기 볶음 레시피",
    },
    {
      id: 2,
      title: "소고기 찜",
      ingredients: ["소고기"],
      method: "찜",
      description: "부드러운 소고기 찜 레시피",
    },
    {
      id: 3,
      title: "닭고기 구이",
      ingredients: ["닭고기"],
      method: "구이",
      description: "노릇하게 구운 닭고기 레시피",
    },
  ];

  const handleIngredientToggle = (ingredient) => {
    setSelectedIngredients((prevSelected) =>
      prevSelected.includes(ingredient)
        ? prevSelected.filter((item) => item !== ingredient)
        : [...prevSelected, ingredient]
    );
  };

  const handleMethodToggle = (method) => {
    setSelectedMethods((prevSelected) =>
      prevSelected.includes(method)
        ? prevSelected.filter((item) => item !== method)
        : [...prevSelected, method]
    );
  };

  // 필터링된 레시피
  const filteredRecipes = recipes.filter(
    (recipe) =>
      (selectedIngredients.length === 0 ||
        selectedIngredients.every((ingredient) =>
          recipe.ingredients.includes(ingredient)
        )) &&
      (selectedMethods.length === 0 ||
        selectedMethods.includes(recipe.method)) &&
      recipe.title.includes(searchQuery)
  );

  return (
    <div className="search-page">
      {/* 검색 입력 박스 */}
      <div>
        <input
          type="text"
          placeholder="레시피를 검색하세요..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <span className="material-symbols-outlined">search</span>
      </div>

      <div className="search-buttons">
        <button
          className="ingredient-search-button"
          onClick={() => setIngredientModalOpen(true)}
        >
          재료
        </button>
        <button
          className="method-search-button"
          onClick={() => setMethodModalOpen(true)}
        >
          조리방식
        </button>
      </div>

      {/* 재료별 검색 모달 */}
      {isIngredientModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>재료</h2>
            <label>
              <input
                type="checkbox"
                checked={selectedIngredients.includes("돼지고기")}
                onChange={() => handleIngredientToggle("돼지고기")}
              />
              돼지고기
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedIngredients.includes("소고기")}
                onChange={() => handleIngredientToggle("소고기")}
              />
              소고기
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedIngredients.includes("닭고기")}
                onChange={() => handleIngredientToggle("닭고기")}
              />
              닭고기
            </label>
            <button onClick={() => setIngredientModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}

      {/* 조리방식별 검색 모달 */}
      {isMethodModalOpen && (
        <div className="modal-background">
          <div className="modal">
            <h2>조리방식</h2>
            <label>
              <input
                type="checkbox"
                checked={selectedMethods.includes("볶음")}
                onChange={() => handleMethodToggle("볶음")}
              />
              볶음
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedMethods.includes("찜")}
                onChange={() => handleMethodToggle("찜")}
              />
              찜
            </label>
            <label>
              <input
                type="checkbox"
                checked={selectedMethods.includes("구이")}
                onChange={() => handleMethodToggle("구이")}
              />
              구이
            </label>
            <button onClick={() => setMethodModalOpen(false)}>닫기</button>
          </div>
        </div>
      )}

      {/* 검색 결과 */}
      <div className="recipe-container">
        <div className="recipe-results">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="recipe-card"
                onClick={() => setSelectedRecipe(recipe)}
              >
                <h3>{recipe.title}</h3>
              </div>
            ))
          ) : (
            <p>선택된 조건에 해당하는 레시피가 없습니다.</p>
          )}
        </div>
      </div>

      {/* 레시피 상세 모달 */}
      {selectedRecipe && (
        <div className="modal-background">
          <div className="modal recipe-detail-modal">
            {/* <img
              src={require(`../assets/images/${selectedRecipe.image}`)}
              alt={selectedRecipe.title}
              className="recipe-image"
            /> */}
            <div className="recipe-info">
              <h2>{selectedRecipe.title}</h2>
              <p>{selectedRecipe.description}</p>
              <div className="recipe-ingredients">
                <h3>재료:</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button onClick={() => setSelectedRecipe(null)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
