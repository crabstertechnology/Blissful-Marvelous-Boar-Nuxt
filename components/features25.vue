<template>
  <div class="thq-section-padding">
    <div class="features25-container2 thq-section-max-width">
      <div class="features25-tabs-menu">
        <div @click="activeTab = 0" class="features25-tab-horizontal1">
          <div class="features25-divider-container1">
            <div v-if="activeTab === 0" class="features25-container3"></div>
          </div>
          <div class="features25-content1">
            <h2 class="thq-heading-2">
              <slot name="feature1Title">
                <!--Default content for feature1Title-->
                <div class="features25-fragment2">
                  <span class="features25-text2">AI Solutions</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="feature1Description">
                <!--Default content for feature1Description-->
                <div class="features25-fragment3">
                  <span class="features25-text3">
                    Cutting-edge artificial intelligence solutions tailored to
                    meet your business needs.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 1" class="features25-tab-horizontal2">
          <div class="features25-divider-container2">
            <div v-if="activeTab === 1" class="features25-container4"></div>
          </div>
          <div class="features25-content2">
            <h2 class="thq-heading-2">
              <slot name="feature2Title">
                <!--Default content for feature2Title-->
                <div class="features25-fragment4">
                  <span class="features25-text4">ML Services</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="feature2Description">
                <!--Default content for feature2Description-->
                <div class="features25-fragment1">
                  <span class="features25-text1">
                    Machine learning services that drive data-driven
                    decision-making and innovation.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
        <div @click="activeTab = 2" class="features25-tab-horizontal3">
          <div class="features25-divider-container3">
            <div v-if="activeTab === 2" class="features25-container5"></div>
          </div>
          <div class="features25-content3">
            <h2 class="thq-heading-2">
              <slot name="feature3Title">
                <!--Default content for feature3Title-->
                <div class="features25-fragment6">
                  <span class="features25-text6">IoT Integration</span>
                </div>
              </slot>
            </h2>
            <span class="thq-body-small">
              <slot name="feature3Description">
                <!--Default content for feature3Description-->
                <div class="features25-fragment5">
                  <span class="features25-text5">
                    Internet of Things integration for seamless connectivity and
                    smart solutions.
                  </span>
                </div>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div class="features25-image-container">
        <img
          :alt="feature1ImgAlt"
          :src="feature1ImgSrc"
          v-if="activeTab === 0"
          class="features25-image1 thq-img-ratio-16-9"
        />
        <img
          :alt="feature2ImgAlt"
          :src="feature2ImgSrc"
          v-if="activeTab === 1"
          class="features25-image2 thq-img-ratio-16-9"
        />
        <img
          :alt="feature3ImgAlt"
          :src="feature3ImgSrc"
          v-if="activeTab === 2"
          class="features25-image3 thq-img-ratio-16-9"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Features25',
  props: {
    feature1ImgAlt: {
      type: String,
      default: 'AI Solutions Image Alt Text',
    },
    feature2ImgAlt: {
      type: String,
      default: 'ML Services Image Alt Text',
    },
    feature3ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1506186651797-f488507d916b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDE3OTk0MHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature3ImgAlt: {
      type: String,
      default: 'IoT Integration Image Alt Text',
    },
    feature1ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1560272431-2489480bff04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDE3OTkzOXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    feature2ImgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDE3OTk0MHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style scoped>
.features25-container2 {
  width: 100%;
  display: grid;
  grid-gap: var(--dl-layout-space-fiveunits);
  position: relative;
  grid-template-columns: 1fr 1fr;
}
 
.features25-tabs-menu {
  gap: var(--dl-layout-space-twounits);
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.features25-tab-horizontal1 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features25-divider-container1 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features25-container3 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features25-content1 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.features25-tab-horizontal2 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features25-divider-container2 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features25-container4 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features25-content2 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.features25-tab-horizontal3 {
  gap: var(--dl-layout-space-twounits);
  cursor: pointer;
  display: flex;
  overflow: hidden;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
 
.features25-divider-container3 {
  display: flex;
  align-self: stretch;
  align-items: flex-start;
}
 
.features25-container5 {
  width: 2px;
  align-self: stretch;
  background-color: var(--dl-color-theme-neutral-dark);
}
 
.features25-content3 {
  gap: 16px;
  flex: 1;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
}
 
.features25-image-container {
  height: 100%;
  display: flex;
  position: relative;
}
 
.features25-image1 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features25-image2 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features25-image3 {
  animation-name: fadeIn;
  animation-delay: 0s;
  animation-duration: 300ms;
  animation-direction: normal;
  animation-iteration-count: 1;
  animation-timing-function: ease;
}
 
.features25-fragment1 {
  display: contents;
}
 
.features25-text1 {
  display: inline-block;
}
 
.features25-fragment2 {
  display: contents;
}
 
.features25-text2 {
  display: inline-block;
}
 
.features25-fragment3 {
  display: contents;
}
 
.features25-text3 {
  display: inline-block;
}
 
.features25-fragment4 {
  display: contents;
}
 
.features25-text4 {
  display: inline-block;
}
 
.features25-fragment5 {
  display: contents;
}
 
.features25-text5 {
  display: inline-block;
}
 
.features25-fragment6 {
  display: contents;
}
 
.features25-text6 {
  display: inline-block;
}
 
@media(max-width: 991px) {
  .features25-container2 {
    grid-gap: var(--dl-layout-space-twounits);
    grid-template-columns: 1fr;
  }
  .features25-tabs-menu {
    order: 2;
  }
}
</style>
