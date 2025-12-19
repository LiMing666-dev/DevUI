<template>
  <div class="Box">
    <h4 class="BoxTitle">Input 输入框</h4>
    <div class="BoxDocs">
      d-input是由Fluent
      UI主题设计的一个输入框组件，提供了多种风格和尺寸的选择，可以满足不同场景下的输入需求。
    </div>
    <div class="BoxTags">
      <div class="BoxTag">
        <div class="mdi mdi-bug" style="font-size: 16px"></div>
        <div>报告bug</div>
      </div>
      <div class="BoxTag">
        <span class="mdi mdi-github" style="font-size: 16px"></span>
        <div>在GitHub上查看</div>
      </div>
    </div>
    <h4 class="BoxTitle2" style="margin-top: 30px">默认使用</h4>
    <div class="BoxDocs">下面演示一个输入框的默认使用方法</div>

    <div class="BoxCode">
      <div class="BoxCodeHeader">
        <div class="BoxCodeHeaderLeft"></div>
        <div class="BoxCodeHeaderRight">
          <div class="mdi mdi-content-copy"></div>
          <div class="mdi mdi-chevron-up"></div>
        </div>
      </div>
      <div class="BoxCodeConten">
        <d-input v-model="value">Dev 默认按钮</d-input>
      </div>
      <div class="BoxCodeT">
        <div v-text="code1"></div>
      </div>
    </div>

    <h4 class="BoxTitle2" style="margin-top: 30px">变体</h4>
    <div class="BoxDocs" style="font-weight: 700">
      提供一个Type属性，可以让按钮变化不同的风格，目前有的汇总如下
    </div>
    <div>
      <div class="BoxDocs">undefined 默认按钮</div>
      <div class="BoxDocs">primary 强调按钮为主要操作</div>
      <div class="BoxDocs">outline 将按钮的背景删除</div>
      <div class="BoxDocs">subtle 最小化强调以融入背景，直到悬停或聚焦</div>
      <div class="BoxDocs">transparent 删除背景和边框样式。</div>
    </div>

    <div class="BoxCode">
      <div class="BoxCodeHeader">
        <div class="BoxCodeHeaderLeft"></div>
        <div class="BoxCodeHeaderRight">
          <div class="mdi mdi-content-copy"></div>
          <div class="mdi mdi-chevron-up"></div>
        </div>
      </div>
      <div class="BoxCodeConten">
        <d-button>默认按钮</d-button>
        <d-button type="primary">Primary按钮</d-button>
        <d-button type="outline">Outline默认按钮</d-button>
        <d-button type="subtle">Subtle默认按钮</d-button>
        <d-button type="transparent">Transparent默认按钮</d-button>
      </div>
      <div class="BoxCodeT">
        <div v-text="code12"></div>
      </div>
    </div>

    <h4 class="BoxTitle2" style="margin-top: 30px">圆角</h4>
    <div class="BoxDocs">Shape属性可以改变圆角大小，可以是圆形或者是方形</div>

    <div class="BoxCode">
      <div class="BoxCodeHeader">
        <div class="BoxCodeHeaderLeft"></div>
        <div class="BoxCodeHeaderRight">
          <div class="mdi mdi-content-copy"></div>
          <div class="mdi mdi-chevron-up"></div>
        </div>
      </div>
      <div class="BoxCodeConten">
        <d-button shape="none">去除圆角</d-button>
        <d-button shape="sm">SN 圆角</d-button>
        <d-button shape="">初始圆角</d-button>
        <d-button shape="lg">LG 圆角</d-button>
        <d-button shape="xl">XL 圆角</d-button>
      </div>
      <div class="BoxCodeT">
        <div v-text="code12"></div>
      </div>
    </div>

    <h4 class="BoxTitle2" style="margin-top: 30px">颜色</h4>
    <div class="BoxDocs">
      Color
      属性可以为按钮添加任何颜色包括你自定义的，方便为了通用场景生成了常用颜色success(成功),error(危险)<br />
      对于自定义颜色我们还提供了一个对比度的功能，可以自动识别并且更改文字颜色，如果你想自己修改也可以直接使用color属性来修改
    </div>

    <div class="BoxCode">
      <div class="BoxCodeHeader">
        <div class="BoxCodeHeaderLeft"></div>
        <div class="BoxCodeHeaderRight">
          <div class="mdi mdi-content-copy"></div>
          <div class="mdi mdi-chevron-up"></div>
        </div>
      </div>
      <div class="BoxCodeConten">
        <d-button color="success">Success 成功</d-button>
        <d-button color="error">Error 失败</d-button>
        <d-button color="#1976D2">自定义颜色</d-button>
        <d-button color="#FFFDE7">自定义颜色</d-button>
      </div>
      <div class="BoxCodeT">
        <div v-text="code12"></div>
      </div>
    </div>

    <h4 class="BoxTitle2" style="margin-top: 30px">尺寸</h4>
    <div class="BoxDocs">
      Size 属性可以更改按钮的尺寸，目前提供了三种尺寸选择 small,medium,large
    </div>

    <div class="BoxCode">
      <div class="BoxCodeHeader">
        <div class="BoxCodeHeaderLeft"></div>
        <div class="BoxCodeHeaderRight">
          <div class="mdi mdi-content-copy"></div>
          <div class="mdi mdi-chevron-up"></div>
        </div>
      </div>
      <div class="BoxCodeConten">
        <d-button size="small">Small 按钮</d-button>
        <d-button size="medium">默认尺寸</d-button>
        <d-button size="large">Large 按钮</d-button>
      </div>
      <div class="BoxCodeT">
        <div v-text="code12"></div>
      </div>
    </div>
    <h4 class="BoxTitle2" style="margin-top: 30px">Api</h4>
    <div class="BoxDocs">下面是关于Button的Api文档</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const code1 = "<d-button>Dev 默认按钮</d-button>";
const code12 = `<d-button>Dev 默认按钮</d-button> 
   <d-button>Dev 默认按钮</d-button>
   <d-button>Dev 默认按钮</d-button>
   <d-button>Dev 默认按钮</d-button>`;

const value = ref("13131");
</script>

<style lang="scss">
.Box {
  width: 900px;
  margin: 0 auto;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  padding: 20px;
  .BoxTitle {
    font-size: 26px;
    margin-top: 10px;
  }
  .BoxTitle2 {
    font-size: 22px;
    margin-top: 10px;
  }
  .BoxDocs {
    margin-top: 10px;
    font-size: 14px;
  }
  .BoxTags {
    display: flex;
    margin-top: 20px;
    gap: 20px;
    .BoxTag {
      display: inline-flex;
      padding: 0px 8px;
      background: #e7e7e7;
      font-size: 12px;
      align-items: center;
      border-radius: 5px;
      gap: 5px;
      cursor: pointer;
    }
  }

  .BoxCode {
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px #e7e7e7 solid;
    .BoxCodeHeader {
      height: 36px;
      background: #eeeeee;
      display: flex;
      justify-content: space-between;
      .BoxCodeHeaderRight {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        padding-right: 10px;
      }
    }
    .BoxCodeConten {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .BoxCodeT {
      box-sizing: border-box;
      background: #212121;
      padding: 10px 15px;
      color: white;
      font-size: 14px;
    }
  }
}
</style>