<template>
    <v-container>

        <v-card
            class="d-flex pa-2"
            outlined
            tile
        >
        <v-card-text>
            <v-row class="d-flex">
                <v-col>
                  <v-btn class="subtitle-2 pa-2" @click="dialog = true">Encrypt</v-btn>
                  <v-btn class="subtitle-2 pa-2">Decrypt</v-btn>
                  <v-btn v-if="(text||'').length>0" class="mr-auto">Copy</v-btn>
                  <v-btn v-if="(text||'').length==0" class="mr-auto">Paste</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                    v-model="text"
                    outlined
                    auto-grow
                    clearable
                    name="input-7-1"
                    label="Plain or Cipher text"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-card-text>
        </v-card>

        <v-dialog
              v-model="dialog"
              width="500"
        >
          <v-card>
            <v-card-title
              class="headline grey lighten-2"
              primary-title
            >
              Results
            </v-card-title>

            <v-card-text>
              processed text
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <div class="flex-grow-1"></div>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Copy
              </v-btn>

              <div class="flex-grow-1"></div>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Close
              </v-btn>

            </v-card-actions>
          </v-card>

        </v-dialog>
    </v-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      dialog: false,
      text:'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.'
    }
  }
}
</script>
