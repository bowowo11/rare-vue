<template>
  <div class="about">
    <h1>我的图鉴</h1>
  </div>
  <div class="mode1">
    <div class="list">
      <ul class="infinite-list">
        <li v-for="item in imgWrap" :key="item.id">
          <div class="modal-box">
            <!-- 模态框里的图片 -->
            <img
              :src="require('../picture/' + item.id + '.jpg')"
              class="modalimage"
              @click="clickmobal($event)"
            />
            <span class="name">{{ item.name }}</span>
            <span class="message">{{ item.description }}</span>
            <span class="team">{{ item.team }}</span>
            <span class="rank">{{ rank(item.rareRank) }}</span>
          </div>
          <!-- 卡牌的图片 -->
          <img
            :src="require('../picture/' + item.id + '.jpg')"
            @click="clickfun($event)"
          />
        </li>
      </ul>
    </div>
  </div>
  <div class="mode1"></div>
</template>
<script>
export default {
  name: "chouKa",
  data() {
    return {
      //根据服务器的数据显示
      ur: [{ name: 1, rank: "ur", image: "3.png" }, 1, 2, 3, 4, 5],
      sr: [
        { name: 1, rank: "ur", image: "@/assets/5.jpg" },
        { name: 22, rank: "ur" },
        3,
        4,
        5,
        6,
        7,
      ],
      r: [1, 2, 3, 4, 5],
      // 接受数据的数组
      imgWrap: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 15 }],
    };
  },
  methods: {
    clickRecharge() {},
    clickUR(ID) {
      console.log(ID);
    },
    //模态框的方法
    //点击卡牌打开/关闭模态框
    clickfun(e) {
      if (e.target.parentElement.firstElementChild.style.display == "flex") {
        e.target.parentElement.firstElementChild.style.display = "none";
      } else {
        e.target.parentElement.firstElementChild.style.display = "flex";
      }
      console.log(e.target);
    },
    //点击模态框图片关闭模态框
    clickmobal(e) {
      e.target.parentElement.style.display = "none";
    },
    rank(rare) {
      console.log(rare);
      if (rare == "1") return "R";
      if (rare == "2") return "SR";
      if (rare == "3") return "UR";
    },
  },

  mounted: function () {
    fetch("api/card")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.imgWrap = data;
      });
  },
};
</script>

<style scoped>
.about {
  font-family: "name";
  color: -webkit-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -o-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -ms-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: -moz-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  color: linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
}
img {
  overflow: auto;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
p {
  text-align: left;
  height: 100%;
  width: 100%;
  /* height: 200px; */
  /* margin-bottom: 200px; */
  border-radius: 20px;
  border: 10px;
}
.mode2 {
  /* height: 200px; */
  margin-bottom: 200px;
}
.infinite-list {
  display: grid;
  grid-template-columns: repeat(5, 20vw);
  padding: 10px;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}

.infinite-list .infinite-list-item-sr {
  overflow: auto;
  border: 5px solid plum;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  background: var(--el-color-primary-light-9);
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item-r {
  overflow: auto;
  border: 5px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
  /* 卡牌的背景颜色 */
  background: var(--el-color-primary-light-9);
  background-image: url("@/assets/4.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.list {
  display: flex;
}
.modal-box {
  display: none;
  position: fixed;
  height: 97vh;
  width: 50vw;
  left: 25%;
  /*设置为白色背景  前期可以设置为其他颜色  方便观看*/
  background: -webkit-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -o-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -ms-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: -moz-linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  background: linear-gradient(
    45deg,
    rgb(153, 216, 225) 0%,
    rgb(190, 193, 221) 43%,
    rgb(215, 177, 218) 72%,
    rgb(215, 177, 218) 100%
  );
  top: -17%;
  margin-top: 8rem;
  border-radius: 30px;
  /*解决高度塌陷的问题*/
  overflow: hidden;
  /*z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面*/
  /*比如在fixed定位中，z-index100大小的会覆盖在50大小的上面*/
  z-index: 111;
}
.modalimage {
  border: 12px;
  border-radius: 30px;
  margin-top: 10px;
  display: block;
  height: 600px;
  width: 1000px;
}
.message {
  font-family: "shaonv";
  text-indent: 5em;
  display: grid;
  position: absolute;
  top: 90%;
  font: 300;
  font-size: 30px;
  color: #000;
}
.name {
  font-family: "name";
  text-indent: 1em;
  text-align: center;
  display: grid;
  position: absolute;
  top: 84%;
  font: 300;
  font-size: 30px;
  color: #000;
}
.rank {
  font-family: "english";
  color: rgba(56, 255, 215, 0.498);
  position: absolute;
  font-size: 80px;
  top: 3%;
  left: 25px;
  text-align: right;
}
.team {
  font-family: "shaonv";
  color: darkgoldenrod;
  position: absolute;
  font-size: 25px;
  top: 93%;
  left: 740px;
}
</style>

