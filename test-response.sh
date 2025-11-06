#!/bin/bash

# Script de prueba para verificar que el responder funciona localmente

echo "🧪 Testing PR Comment Responder locally"
echo "========================================"
echo ""

# Verificar que existe el script
if [ ! -f "dist/response-handler.js" ]; then
  echo "❌ dist/response-handler.js no existe"
  echo "Ejecutando build..."
  npm run build
  echo ""
fi

# Configurar variables de entorno de prueba
export GITHUB_TOKEN="dummy_token_for_testing"
export GITHUB_REPOSITORY="cmorenogit/agentes"
export PR_NUMBER="1"
export COMMENT_ID="12345"
export COMMENT_BODY="@sql-agent /help"
export COMMENT_USER="test-user"

# Verificar ANTHROPIC_API_KEY
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo "❌ ANTHROPIC_API_KEY no está configurada"
  echo "Por favor ejecuta: export ANTHROPIC_API_KEY='tu-api-key'"
  exit 1
fi

echo "✅ ANTHROPIC_API_KEY está configurada"
echo ""
echo "📝 Simulando comentario:"
echo "   Usuario: test-user"
echo "   Comentario: @sql-agent /help"
echo "   PR: #1"
echo ""
echo "⏱️  Ejecutando responder..."
echo ""

# Ejecutar el responder (fallará al intentar publicar a GitHub pero mostrará el proceso)
npm run respond

echo ""
echo "========================================"
echo "✅ Test completado"
echo ""
echo "Nota: El test fallará al intentar publicar a GitHub (token dummy)"
echo "pero verás si el parsing y generación de respuesta funcionan."
