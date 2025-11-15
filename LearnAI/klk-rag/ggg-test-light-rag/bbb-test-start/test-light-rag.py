from lightrag import LightRAG, QueryParam
from lightrag.llm.openai import gpt_4o_mini_complete, openai_embed
import os

# os.environ["OPENAI_API_KEY"] = ≈""


rag = LightRAG(working_dir="./dickens",
               embedding_func=openai_embed,
               llm_model_func=gpt_4o_mini_complete,)

with open("./book.txt") as f:
    rag.insert(f.read())

print('-'*100)
print(rag.query("What are the top themes in this story?",
      param=QueryParam(mode="hybird")))
print('-'*100)
