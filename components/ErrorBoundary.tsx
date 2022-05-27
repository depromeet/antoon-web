import React, { Component, ReactChild } from 'react';
import styled from '@emotion/styled';

interface Props {
  children: ReactChild;
  message?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render() {
    const { message } = this.props;

    if (this.state.hasError) {
      return (
        <ErrorMessage>{message ?? '에러가 발생했어요 😭😭😭'}</ErrorMessage>
      );
    }

    return this.props.children;
  }
}

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
`;

export default ErrorBoundary;
