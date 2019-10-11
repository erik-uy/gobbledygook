<template>
    <v-container>

        <v-card
            class="d-flex pa-2"
            outlined
            tile
        >
        <v-card-text>
            <v-row>
                <v-col><v-btn>Encrypt</v-btn></v-col>
                <v-col><v-btn>Copy</v-btn><v-btn>Paste</v-btn></v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-textarea
                    outlined
                    auto-grow
                    clearable
                    name="input-7-1"
                    label="Plaintext"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    ></v-textarea>
                </v-col>
            </v-row>
        </v-card-text>
        
        
            
        </v-card>
    </v-container>
</template>