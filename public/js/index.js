class TeamMember {
  constructor(name, avatar, position) {
    this.name = name;
    this.avatar = avatar;
    this.position = position;
  }
}

const $USER = document.getElementById("user");
const $TEAM_HEADER_SLIDE = document.getElementById("slider-header");
const $TEAM_SLIDER = document.getElementById("slider");

const $FEATURE_SLIDER = document.getElementById("feature-slider-header");

const $TEAM_HEADER_SLIDE_CHILD = () =>
  document.querySelectorAll(".slider-header-child");

const POSITIONS = {
  CODE_TEAM: {
    key: "Lập trình",
    values: [
      new TeamMember(
        "Ngô Trường Quốc",
        "./public/images/team-member.min.svg",
        "backend"
      ),
      new TeamMember(
        "Nguyễn Quang Tú",
        "./public/images/team-member.min.svg",
        "backend"
      ),
      new TeamMember(
        "Đặng Ngọc Phú",
        "./public/images/team-member.min.svg",
        "backend"
      ),
      new TeamMember(
        "Lê Vũ Tuấn Kha",
        "./public/images/team-member.min.svg",
        "backend"
      ),
    ],
  },
  MANAGEMENT: {
    key: "Quản lý dự án",
    values: [
      new TeamMember(
        "Nguyễn Thị Tuyết Trinh",
        "./public/images/team-member.min.svg",
        "Quản lý dự án"
      ),
      new TeamMember(
        "Nguyễn Thị Út Quyền",
        "./public/images/team-member.min.svg",
        "Quản lý dự án"
      ),
    ],
  },
  DESIGN: {
    key: "Thiết kế",
    values: [
      new TeamMember(
        "Nguyễn Thị Út Quyền",
        "./public/images/team-member.min.svg",
        "UI/UX"
      ),
      new TeamMember(
        "Đoàn Thanh Nhật",
        "./public/images/team-member.min.svg",
        "UI/UX"
      ),
      new TeamMember(
        "Trương Thị Hồng Nga",
        "./public/images/team-member.min.svg",
        "UI/UX"
      ),
    ],
  },
  MARKETING: {
    key: "Marketing Online",
    values: [
      new TeamMember(
        "Lê Tiến Dũng",
        "./public/images/team-member.min.svg",
        "Marketing Online"
      ),
      new TeamMember(
        "Nguyễn Thị Thùy Trang",
        "./public/images/team-member.min.svg",
        "Marketing online"
      ),
      new TeamMember(
        "Dương Nguyễn Thúy Nga",
        "./public/images/team-member.min.svg",
        "Marketing online"
      ),
    ],
  },
};
const OFFSET_USER_SECTION = $USER.offsetTop;
const ACTIVE_SLIDE_CHILD = "slider-header-child-active";
const TIMEOUT_SLIDE_AUTO_TRANSFORM = 2000;
const POSITION_KEYS = Object.keys(POSITIONS);

function renderTeamPositions() {
  Object.keys(POSITIONS).forEach((key) => {
    const node = document.createElement("div");
    node.className = "col slider-header-child";
    node.setAttribute("attr-key", key);
    node.id = key;
    const keyPosition = POSITIONS[key].key;
    const content = document.createTextNode(keyPosition);
    node.appendChild(content);

    if (key === "CODE_TEAM") node.classList.add(ACTIVE_SLIDE_CHILD);

    node.addEventListener("click", function (event) {
      clearActiveOnSliderHeaderChild();
      // Add color when being active
      this.classList.add(ACTIVE_SLIDE_CHILD);

      const sliderDOM = document.getElementById("slider");
      if (sliderDOM.hasChildNodes()) {
        sliderDOM.innerHTML = "";
      }

      const sliderItems = fetchSliderItemValues(this);
      bindingItemsToSlider(sliderItems);
    });
    $TEAM_HEADER_SLIDE.appendChild(node);
  });
  const sliderItems = POSITIONS["CODE_TEAM"].values;
  bindingItemsToSlider(sliderItems);
}

/**
 *
 * @param {any} node
 * @returns {[]} values of members get by node
 */
function fetchSliderItemValues(node) {
  const key = node.getAttribute("attr-key");
  return POSITIONS[key].values;
}

function bindingItemsToSlider(items) {
  items.forEach((item) => {
    const template = `
            <div class="row justify-content-center">
            <div class="slider-item-avatar">
                <img src="${item.avatar}" alt="">
            </div>
            </div>

            <div class="row justify-content-center">
            <img src="./public/images/dot-line.min.svg" alt=""></img>
            </div>

            <div class="row justify-content-center slider-item-name">
            <b>${item.name}</b>
            </div>
            <div class="row justify-content-center slider-item-position">
            ${item.position}
            </div>
    `;
    const wrapperNode = document.createElement("div");

    wrapperNode.classList = "animate-left-to-right col slider-item";
    wrapperNode.innerHTML = template;

    $TEAM_SLIDER.appendChild(wrapperNode);
  });
}

function bindingEventScrollBehavior() {
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop + 400 > OFFSET_USER_SECTION) {
      document.querySelectorAll(".animate-ltr").forEach((item) => {
        item.classList.add("animate-left-to-right");
        item.classList.remove("animate-ltr");
      });
      document.querySelectorAll(".animate-rtl").forEach((item) => {
        item.classList.add("animate-right-to-left");
        item.classList.remove("animate-rtl");
      });
    }
  });
}

function clearActiveOnSliderHeaderChild() {
  $TEAM_HEADER_SLIDE_CHILD().forEach((item) => {
    item.classList.remove(ACTIVE_SLIDE_CHILD);
  });
}

function autoTransfromSlide() {
  setTimeout(() => {
    const currentKey = document.getElementsByClassName(ACTIVE_SLIDE_CHILD)[0]
      .id;
    POSITION_KEYS.forEach((item, index) => {
      if (item === currentKey) {
        let nextKey = index + 1;
        if (nextKey > POSITION_KEYS.length - 1) nextKey = 0;
        document.getElementById(POSITION_KEYS[nextKey]).click();
      }
    });
    setTimeout(autoTransfromSlide, TIMEOUT_SLIDE_AUTO_TRANSFORM);
  }, TIMEOUT_SLIDE_AUTO_TRANSFORM);
}

function main() {
  renderTeamPositions();
  bindingEventScrollBehavior();
  autoTransfromSlide();
}

main();
