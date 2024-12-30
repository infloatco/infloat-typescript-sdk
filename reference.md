# Reference

## Auth

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">login</a>({ ...params }) -> InfloatApi.Token</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.login({
    email: "email",
    password: "password",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.LoginSchema`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">authCallback</a>() -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.authCallback();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">registerUser</a>({ ...params }) -> InfloatApi.UserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.registerUser({
    username: "username",
    email: "email",
    password: "password",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.UserCreate`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">deleteUser</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.deleteUser();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.auth.<a href="/src/api/resources/auth/client/Client.ts">logout</a>() -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.auth.logout();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Auth.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crawler

<details><summary><code>client.crawler.<a href="/src/api/resources/crawler/client/Client.ts">crawlWebsite</a>({ ...params }) -> InfloatApi.WebsiteIngestionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Start a website crawl.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crawler.crawlWebsite({
    url: "url",
    chatbotId: "chatbot_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.WebsiteIngestionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Crawler.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crawler.<a href="/src/api/resources/crawler/client/Client.ts">ingestYoutube</a>({ ...params }) -> InfloatApi.YoutubeTranscript</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crawler.ingestYoutube({
    url: "url",
    chatbotId: "chatbot_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.BodyIngestYoutubeApiV1IngestYoutubePost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Crawler.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crawler.<a href="/src/api/resources/crawler/client/Client.ts">uploadDocument</a>(file, { ...params }) -> InfloatApi.FilePathResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crawler.uploadDocument(fs.createReadStream("/path/to/your/file"), {
    chatbotId: "chatbot_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**file:** `File | fs.ReadStream | Blob`

</dd>
</dl>

<dl>
<dd>

**request:** `InfloatApi.BodyUploadDocumentApiV1IngestDocumentPost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Crawler.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Chatbot

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">chatbot</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check if the current user has access to the chatbot.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.chatbot({
    uniqueCode: "unique_code",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.ChatbotApiV1ChatbotChatCompletionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">getAllUserChatbots</a>() -> InfloatApi.ChatbotResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all chatbots belonging to the current user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.getAllUserChatbots();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">createChatbot</a>({ ...params }) -> InfloatApi.ChatbotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new chatbot for the current user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.createChatbot({
    chatbotName: "chatbot_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `InfloatApi.BodyCreateChatbotApiV1ChatbotPost`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">getChatbots</a>(chatbotId) -> InfloatApi.ChatbotResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch chatbots with optional filters:

- `id`: Fetch a specific chatbot by its ID.
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.getChatbots("chatbot_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatbotId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">updateChatbot</a>(chatbotId, { ...params }) -> InfloatApi.ChatbotResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a specific chatbot.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.updateChatbot("chatbot_id", {
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatbotId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `InfloatApi.BodyUpdateChatbotApiV1ChatbotChatbotIdPut`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.chatbot.<a href="/src/api/resources/chatbot/client/Client.ts">deleteChatbot</a>(chatbotId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a specific chatbot.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.chatbot.deleteChatbot("chatbot_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**chatbotId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Chatbot.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
