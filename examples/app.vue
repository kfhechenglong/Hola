<template>
    <div>
        hcl-ui
        <Button
            type="primary"
            ref="btn"
            class="btn"
            id="ss"
            :na="'12'"
            :style="'width: 200px'"
            >按钮</Button
        >
    </div>
</template>
<script lang="ts" setup>
import './../packages/components/es/style.css'
import { Button } from './../packages/components/es/index'
</script>
